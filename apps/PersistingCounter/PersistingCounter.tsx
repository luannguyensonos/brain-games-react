import React from "react"
import { controls, counterContainer, labelStyle } from "./PersistingCounter.css"
import { useCookies } from 'react-cookie'

type PersistingCounterProps = {
  label: string
}

const PersistingCounter = ({ label }: PersistingCounterProps) => {

  const cookieName = `pCounter_${label}`

  const [currentNumber, setCurrentNumber] = React.useState(0)
  const [cookies, setCookie] = useCookies([cookieName])

  React.useEffect(() => {
    if (cookies && cookies[cookieName]) {
      const number = Number.isInteger(Number(cookies[cookieName])) ? Number(cookies[cookieName]) : 0
      setCurrentNumber(number)
    }
  }, [cookieName, cookies, setCurrentNumber])

  const add = (delta: number) => {
    const newValue = Number(currentNumber) + delta
    setCurrentNumber(newValue)
    setCookie(cookieName, newValue)
  }

  return (
    <div className={counterContainer}>
      <div className={labelStyle}>
        {label}
      </div>
      <div className={controls}>
        <button 
          onClick={()=>{add(-1)}}>
            -
        </button>
        <span>{currentNumber}</span>
        <button 
          onClick={()=>{add(1)}}>
             +
        </button>
      </div>
    </div>
  )
}

export default PersistingCounter
