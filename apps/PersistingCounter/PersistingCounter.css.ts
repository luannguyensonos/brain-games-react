import { globalStyle, style } from "@vanilla-extract/css"

export const counterContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '16px',
  marginBottom: '16px',
})

export const labelStyle = style({
  fontSize: '6vh',
  textAlign: 'center',
  marginBottom: '1vh'
})

export const controls = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  color: 'white',
  padding: '2vw 10vw'
})

globalStyle(`${controls} button`, {
  height: '14vw',
  width: '14vw',
  fontSize: '8vw',
  backgroundColor: 'transparent',
  border: '1px solid white',
  borderRadius: '50%'
})

globalStyle(`${controls} span`, {
  fontSize: '24vw',
})
