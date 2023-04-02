import React from "react"
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'
import { container, messageStyle, timeStyle } from "./AnalogClockGame.css"
import { getRandomInt } from "../../utils/numbers"

type AnalogClockGameProps = {
}

const AnalogClockGame = ({ }: AnalogClockGameProps) => {

  const [hour, setHour] = React.useState(0)
  const [minute, setMinute] = React.useState(0)
  const [message, setMessage] = React.useState("")

  const [userHour, setUserHour] = React.useState<number|undefined>()
  const [userMinute, setUserMinute] = React.useState<number|undefined>()
  const [score, setScore] = React.useState(0)

  const setNewTime = () => {
    setHour(getRandomInt(12, {direction: "UP"}))
    setMinute(getRandomInt(59, {direction: "UP"}))
    setUserHour(0)
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

  const onHourChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserHour(Number(e.target.value))
    checkWinner(Number(e.target.value), userMinute)
  }
  const onMinuteChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserMinute(Number(e.target.value))
    checkWinner(userHour, Number(e.target.value))
  }

  const onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    e.target.focus({preventScroll: true})
    document.body.scrollTop = document.documentElement.scrollTop = 0;
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
        <input type="number" pattern="\d*" min={1} max={12} value={userHour} onChange={onHourChange} onFocus={onFocus} />
        &nbsp;:&nbsp;
        <input type="number" pattern="\d*" min={0} max={59} value={userMinute} onChange={onMinuteChange} onFocus={onFocus} />
      </div>
      <Clock value={ currentDate } />
      <div className={messageStyle}>Score: {score}</div>
      <div className={messageStyle}>{message}</div>
    </div>
  )
}

export default AnalogClockGame
