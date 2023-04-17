import { globalStyle, style } from "@vanilla-extract/css"

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const row = style({
  display: 'flex',
  flexDirection: 'row',
})

export const topContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const numberGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '2vh',
  marginBottom: '2vh',
})

export const numberCircle = style({
  height: '15vw',
  width: '15vw',
  border: '1px solid',
  borderRadius: '50%',
  padding: '2vw',
  margin: '3vw',
  zIndex: 2,
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center'
})

export const numberGridItem = style({
  height: '12vw',
  width: '12vw',
})

export const numberTouched = style({
  backgroundColor: '#999',
})

export const numberCorrect = style({
  backgroundColor: 'green',
})
