import React from "react"
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'
import { clockContainer, clockface, container, messageStyle, timeStyle } from "./AnalogClockGame.css"
import { getRandomInt, createRange } from '../../utils/numbers';

type AnalogClockGameProps = {
}

const hourRange = [12,1,2,3,4,5,6,7,8,9,10,11]
const minuteRange = createRange(60)

const AnalogClockGame = ({ }: AnalogClockGameProps) => {

  const [hour, setHour] = React.useState(12)
  const [minute, setMinute] = React.useState(0)
  const [message, setMessage] = React.useState("")

  const [userHour, setUserHour] = React.useState<number|undefined>()
  const [userMinute, setUserMinute] = React.useState<number|undefined>()
  const [score, setScore] = React.useState(0)

  const setNewTime = () => {
    setHour(getRandomInt(12, {direction: "UP"}))
    setMinute(getRandomInt(59, {direction: "UP"}))
    setUserHour(12)
    setUserMinute(0)
    setMessage("")
  }

  const checkWinner = (newHour?: number, newMinute?: number) => {
    console.log(newHour, hour, newMinute, minute)
    if (newHour === hour &&
      (newMinute === minute || 
        newMinute === minute+1 || 
        newMinute === minute-1)) {
      setMessage("Correct")
      setScore(score+1)
      setTimeout(() => {
        setNewTime()
      }, 1500)
    }
  }

  const onHourChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setUserHour(Number(e.target.value))
    checkWinner(Number(e.target.value), userMinute)
  }
  const onMinuteChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setUserMinute(Number(e.target.value))
    checkWinner(userHour, Number(e.target.value))
  }


  React.useEffect(() => {
    setNewTime()
  }, [])

  const currentDate = new Date()
  currentDate.setHours(hour)
  currentDate.setMinutes(minute)

  return (
    <div className={`${container} ${message}`}>
      <div className={timeStyle}>
        <select id="hour" name="userHour" value={userHour} onChange={onHourChange}>
          {hourRange.map(i => <option key={i} value={i}>{i}</option>)}
        </select>
        &nbsp;:&nbsp;
        <select id="min" name="userMinute" value={userMinute} onChange={onMinuteChange}>
          {minuteRange.map(i => {
            const val = i < 10 ? `0${i}` : i
            return <option key={i} value={i}>{val}</option>
          })}
        </select>
      </div>
      <div className={clockContainer}>
        <img className={clockface} src="/clock_face.png"/>
        <Clock value={ currentDate } />
      </div>
      <div className={messageStyle}>Score: {score}</div>
      <div className={messageStyle}>{message}</div>
    </div>
  )
}

export default AnalogClockGame
