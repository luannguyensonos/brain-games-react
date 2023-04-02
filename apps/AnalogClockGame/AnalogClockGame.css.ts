import { globalStyle, style } from "@vanilla-extract/css"

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const messageStyle = style({
  margin: '4vh',
  fontSize: '12vw',
  color: 'green',
})

globalStyle(`${container} time`, {
  display: 'flex',
  backgroundColor: 'white',
  height: '90vw !important',
  width: '90vw !important',
  marginTop: '2vh',
  marginBottom: '2vh',
})

globalStyle(`${container} .react-clock__second-hand`, {
  display: 'none',
})