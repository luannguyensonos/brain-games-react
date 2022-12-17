import { globalStyle, keyframes, style } from "@vanilla-extract/css"

const topGutter = '8vw'

export const colorPicker = style({
  display: 'flex',
  width: '100vw',
  height: topGutter,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(1,1,1,0.8)',
  position: 'fixed',
  zIndex: 1,
})

export const colorButton = style({
  fontSize: '1.75vw',
  padding: '1vw',
  backgroundColor: 'black',
  marginLeft: '1vw',
  marginRight: '1vw',
  border: '1px solid',
})

export const notepad = style({
  width: '100vw',
  marginTop: topGutter,
  backgroundColor: '#DDD',
  fontSize: '8vw',
  padding: '2vw',
  paddingBottom: '8vw',
  color: 'black',
  wordWrap: 'break-word',
  fontWeight: 500,
  lineHeight: '8vw',
  letterSpacing: '-0.2vw',
})

const blink = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const cursor = style({
  height: '100%',
  color: 'transparent',
  marginLeft: '4px',
  borderLeft: '2px solid black',
  transition: 'opacity',
  opacity: 1,
  animation: `2s ${blink} ease-in infinite`,
})

globalStyle(`body`, {
  backgroundColor:'#DDD',
})
