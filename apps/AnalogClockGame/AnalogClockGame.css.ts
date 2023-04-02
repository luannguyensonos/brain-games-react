import { globalStyle, style } from "@vanilla-extract/css"

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'sticky',
})

export const messageStyle = style({
  margin: '2vh',
  fontSize: '6vw',
  color: 'green',
})

export const timeStyle = style({
  margin: '2vh',
  fontSize: '8vw',
})

globalStyle(`${container} time`, {
  display: 'flex',
  backgroundColor: 'white',
  height: '65vw !important',
  width: '65vw !important',
  marginTop: '2vh',
  marginBottom: '2vh',
})

globalStyle(`${container}.Correct time`, {
  backgroundColor: 'green',
})

globalStyle(`${container} .react-clock__second-hand`, {
  display: 'none',
})

globalStyle(`${timeStyle} input`, {
  height: '16vw',
  width: '34vw',
  fontSize: '8vw',
  textAlign: 'center',
})