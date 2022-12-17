import React from "react"
import { createRange, getRandomInt } from "../../utils/numbers"
import { controls, gridItem, number, numberContainer, numberGrid } from "./RainbowCounter.css"

type SimpleCounterProps = {}

const upperBound = 100
const range = createRange(upperBound)

type NumberProps = {
  value: number
  setter: React.Dispatch<React.SetStateAction<number>>
}

const Number = ({value, setter}: NumberProps) => {
  const end = value % 10
  const front = parseInt(value.toString().slice(0, -1))

  return (
    <>
      <div className={numberContainer}>
        <div className={`${number} c${front%10}`}>
          {front > 0 ? front : ''}
        </div>
        <div className={`${number} c${end}`}>
          {end}
        </div>
      </div>
      <div className={numberGrid}>
        {range.map(i => {
          const num = i+1
          const endNum = num % 10
          return (
            <button
              key={num}
              className={`${gridItem} ${num <= value ? `c${endNum}` : ''}`}
              onClick={()=>setter(num)}>
              {num}
            </button>
          )
        })}
      </div>
    </>
  )
}

const SimpleCounter = ({}: SimpleCounterProps) => {
  const [currentNumber, setCurrentNumber] = React.useState(0)

  const add = (delta: number) => {
    const newNumber = currentNumber+delta
    if (newNumber < 0 || newNumber > upperBound) return
    setCurrentNumber(newNumber)
  }
  const random = () => {
    let newNumber
    do {
      newNumber = getRandomInt(upperBound)
    } while (newNumber === currentNumber)

    setCurrentNumber(newNumber)
  }

  return (
    <>
      <Number value={currentNumber} setter={setCurrentNumber}/>
      <div className={controls}>
        <button 
          onClick={()=>{add(-10)}}>
            -10
          </button>
        <button 
          onClick={()=>{add(-1)}}>
            -
          </button>
        <button 
          onClick={random}>
             Random
          </button>
        <button 
          onClick={()=>{add(1)}}>
             +
          </button>
        <button 
          onClick={()=>{add(10)}}>
             +10
          </button>
      </div>
    </>
  )
}

export default SimpleCounter
