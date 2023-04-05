import { globalStyle, style } from "@vanilla-extract/css"

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'sticky',
})

export const clockContainer = style({
  position: 'relative',
  marginTop: '2vh',
  marginBottom: '2vh',
})

export const clockface = style({
  position: 'absolute',
  height: '75vw !important',
  width: '75vw !important',
  zIndex: 100,
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
  height: '75vw !important',
  width: '75vw !important',
})

globalStyle(`${container}.Correct time`, {
  backgroundColor: 'green',
})

globalStyle(`${container} .react-clock__second-hand`, {
  display: 'none',
})

globalStyle(`${timeStyle} input, ${timeStyle} select`, {
  height: '16vw',
  width: '34vw',
  fontSize: '8vw',
  textAlign: 'left',
  padding: '3vw',
  verticalAlign: 'middle',
})

globalStyle(`${timeStyle} select#hour`, {
  textAlign: 'right',
})