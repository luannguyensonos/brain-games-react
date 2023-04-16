import React from "react"
import { StraightLine } from "react-drawline"
import { container, numberCircle, numberCorrect, numberGrid, numberTouched, row, topContainer } from "./NumberBondGame.css"
import { getRandomInt, createRange, shuffle } from '../../utils/numbers';

type NumberBondGameProps = {
}

const lowerBound = 6
const upperBound = 20
const gridRange = createRange(upperBound+1)

const NumberBondGame = ({ }: NumberBondGameProps) => {

  const topNumber = React.useRef(null)
  const leftNumber = React.useRef(null)
  const rightNumber = React.useRef(null)
  
  const [targetNumber, setTargetNumber] = React.useState<number>(upperBound)
  const [realRange, setRealRange] = React.useState<number[]>([])
  const [firstIndex, setFirstIndex] = React.useState<string|undefined>()
  const [secondIndex, setSecondIndex] = React.useState<string|undefined>()
  const [correctIndexes, setCorrectIndexes] = React.useState<string[]>([])
  const [totalCorrect, setTotalCorrect] = React.useState<number>(0)
  
  const setNewTargetNumber = () => {
    let newTarget
    do {
      newTarget = getRandomInt(upperBound-lowerBound)+lowerBound
    } while (newTarget === targetNumber)

    const newRange = newTarget % 2 == 0 ? [...gridRange, newTarget/2] : gridRange
    shuffle(newRange)

    setTargetNumber(newTarget)
    setRealRange(newRange)
    setCorrectIndexes([])
  }

  React.useEffect(() => {
    setNewTargetNumber()
  }, [])

  const getNumber = (index?: string) => {
    return index ? document.getElementById(index)?.innerText : ''
  }

  const checkAnswer = (i1?: string, i2?: string) => {
    if (i1 && i2) {
      const a1 = Number(getNumber(i1))
      const a2 = Number(getNumber(i2))
      if (a1+a2 === targetNumber) {
        const newCorrect = [...correctIndexes, i1, i2]
        setCorrectIndexes(newCorrect)
        if (newCorrect.length > targetNumber) {
          setTimeout(() => {
            setNewTargetNumber()
            setTotalCorrect(totalCorrect+1)
          }, 750)
        }
      }
      setTimeout(() => {
        setFirstIndex(undefined)
        setSecondIndex(undefined)
      }, 750)
    }
  }

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = e => {
    var elTouched = document.elementFromPoint(
      e.touches[0].pageX,
      e.touches[0].pageY
    )
    const thisId = elTouched?.id

    if (thisId && correctIndexes.includes(thisId)) return

    if (!firstIndex) {
      setFirstIndex(thisId)
    } else if (thisId != firstIndex) {
      setSecondIndex(thisId)
      checkAnswer(firstIndex, thisId)
    }
  }

  // const onTouchMove: React.TouchEventHandler<HTMLDivElement> = e => {
  //   var elTouched = document.elementFromPoint(
  //     e.touches[0].pageX,
  //     e.touches[0].pageY
  //   )
  //   if (elTouched?.id != firstIndex) {
  //     setSecondIndex(elTouched?.id)
  //   }
  // }

  const firstNumber = getNumber(firstIndex)
  const secondNumber = getNumber(secondIndex)

  return (
    <div className={`${container}`}>
      <div className={`${container}`}>
        <div ref={topNumber} className={`${numberCircle}`}>
          {targetNumber}
        </div>
        <div className={`${row}`}>
          <div ref={leftNumber} className={`${numberCircle}`}>
            {firstNumber}
          </div>
          <div ref={rightNumber} className={`${numberCircle}`}>
            {secondNumber}
          </div>
        </div>
        <StraightLine 
          startingElement={{ref: topNumber, x: "center", y: "mid"}}
          endingElement={{ref: leftNumber, x: "center", y: "mid"}}
          style={{backgroundColor: "white"}}
          className="leftLine"
        />
        <StraightLine 
          startingElement={{ref: topNumber, x: "center", y: "mid"}}
          endingElement={{ref: rightNumber, x: "center", y: "mid"}}
          style={{backgroundColor: "white"}}
          className="rightLine"
        />
      </div>

      <div className={`${numberGrid}`}
        onTouchStart={onTouchStart}
        // onTouchMove={onTouchMove}
      >
        {realRange.map((val, i) => {
          const thisTouched = i === Number(firstIndex) || (secondIndex && i === Number(secondIndex)) ? numberTouched : null
          const thisCorrect = correctIndexes.includes(String(i)) ? numberCorrect : null
          console.log(firstIndex, secondIndex, thisTouched)
          return <div 
              key={i}
              className={`${numberCircle} ${thisTouched} ${thisCorrect}`}
              id={String(i)}
            >
              {val}
            </div>
        })}

      </div>
      <div>Score: {totalCorrect}</div>
    </div>
  )
}

export default NumberBondGame
