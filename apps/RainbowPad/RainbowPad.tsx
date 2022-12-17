import React from "react"
import { colorButton, colorPicker, cursor, notepad } from "./RainbowPad.css"

type RainbowPadProps = {}

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const colorArray = [
  "RED",
  "ORANGE", 
  "YELLOW", 
  "GREEN", 
  "BLUE", 
  "INDIGO", 
  "VIOLET", 
  "BLACK", 
]

type spansAction = {
  type: "NEW" | "APPEND" | "DELETE" | "CLEAR"
  text?: string
}

const spanReducer = (state: string[], action: spansAction) => {
  switch (action.type) {
    case "NEW":
      return [...state, action.text ?? ""]
    case "APPEND":
      const newState = state.slice(0, state.length-1)
      const lastSpan = state[state.length-1]
      const newSpan = lastSpan ? `${lastSpan}${action.text}` : `${action.text}`
      return [...newState, newSpan]
    case "DELETE":
      const deletedState = state.slice(0, state.length-1)
      return [...deletedState]
    case "CLEAR":
      return []
    default:
      return state
  }
}

const RainbowPad = ({}: RainbowPadProps) => {
  const [spans, dispatch] = React.useReducer(spanReducer, [])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      dispatch({type: "CLEAR"})
      window.scrollTo({top: 0})
      return
    }

    if (e.code === "Backspace" || 
        e.code === "Delete") {
      dispatch({type: "DELETE"})
    } else if (e.code === "Space") {
      dispatch({type: "APPEND", text: " "})
    } else if (e.key && e.key.length === 1) {
      if (getRandomInt(100) % 3 !== 0) {
        dispatch({type: "NEW", text: e.key})
      } else {
        dispatch({type: "APPEND", text: e.key})
      }
    }
    window.scrollTo(0, document.body.scrollHeight);
    e.preventDefault();
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
  
  return (
    <>
      <div className={colorPicker}>
        {colorArray.map(c => {
          const color = c === "BLACK" ? "#999" : c
          const activeColor = colorArray[(spans.length-1) % colorArray.length] ?? colorArray[0]
          const borderWidth = c === activeColor ? '8px' : '1px'
          return (
            <button
              className={colorButton}
              key={c}
              style={{color, borderWidth, borderColor: color}}
            >
              {c}
            </button>
          )
        })}
      </div>
      <div className={notepad}>
        {spans.length > 0 ?
          spans.map((s,i) => {
            const color = colorArray[i % colorArray.length]
            return <span key={i} style={{color}}>
              {s}
            </span>
          }) : <span>Welcome to Rainbow Pad</span>}
        <span className={cursor}/>
      </div>
    </>
  )
}

export default RainbowPad
