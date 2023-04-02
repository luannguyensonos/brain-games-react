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

  const [userHour, setUserHour] = React.useState(0)
  const [userMinute, setUserMinute] = React.useState(0)
  const [score, setScore] = React.useState(0)

  const setNewTime = () => {
    setHour(getRandomInt(12, {direction: "UP"}))
    setMinute(getRandomInt(59, {direction: "UP"}))
    setUserHour(0)
    setUserMinute(0)
    setMessage("")
  }

  const checkWinner = () => {
    console.log(userHour, hour, userMinute, minute)
    if (userHour === hour && userMinute === minute) {
      setMessage("Correct!")
      setScore(score+1)
      setTimeout(() => {
        setNewTime()
      }, 1500)
    }
  }

  const onHourChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e)
    setUserHour(Number(e.target.value))
    checkWinner()
  }
  const onMinuteChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e)
    setUserMinute(Number(e.target.value))
    checkWinner()
  }

  React.useEffect(() => {
    setNewTime()
  }, [])

  const currentDate = new Date()
  currentDate.setHours(hour)
  currentDate.setMinutes(minute)

  return (
    <div className={container}>
      <Clock value={ currentDate } />
      <div className={timeStyle}>
        <input type="number" min={1} max={12} step={1} value={userHour} onChange={onHourChange} />
        &nbsp;:&nbsp;
        <input type="number" min={0} max={59} step={1} value={userMinute} onChange={onMinuteChange} />
      </div>
      <div className={messageStyle}>Score: {score}</div>
      <div className={messageStyle}>{message}</div>
    </div>
  )
}

export default AnalogClockGame
