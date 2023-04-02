import { globalStyle, style } from "@vanilla-extract/css"

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const messageStyle = style({
  margin: '2vh',
  fontSize: '6vw',
  color: 'green',
})

export const timeStyle = style({
  fontSize: '10vw',
})

globalStyle(`${container} time`, {
  display: 'flex',
  backgroundColor: 'white',
  height: '70vw !important',
  width: '70vw !important',
  marginTop: '2vh',
  marginBottom: '2vh',
})

globalStyle(`${container} .react-clock__second-hand`, {
  display: 'none',
})

globalStyle(`${timeStyle} input`, {
  height: '18vw',
  width: '36vw',
  fontSize: '10vw',
})