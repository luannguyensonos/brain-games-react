import { globalStyle, style } from "@vanilla-extract/css"
import { container } from "../../components/PageContainer/PageContainer.css"

export const controls = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '4vh',
})

export const numberContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const number = style({
  fontSize: '24vh',
  textAlign: 'center'
})

export const numberGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  marginLeft: 'auto',
  marginRight: 'auto',
})

export const gridItem = style({
  backgroundColor: 'transparent',
  color: '#444',
  border: '1px solid',
  borderRadius: '25%',
  padding: '1vw',
  margin: '2px',
})

globalStyle(`${controls} button`, {
  padding: '2vw',
  paddingLeft: '4vw',
  paddingRight: '4vw',
  backgroundColor: 'transparent',
  border: '1px solid',
})

globalStyle(`${container} .c0`, {
  color: '#FFDC00'
})

globalStyle(`${container} .c1`, {
  color: '#C7EA46'
})

globalStyle(`${container} .c2`, {
  color: '#4CBB17'
})

globalStyle(`${container} .c3`, {
  color: '#008ECC'
})

globalStyle(`${container} .c4`, {
  color: '#93F'
})

globalStyle(`${container} .c5`, {
  color: 'violet'
})

globalStyle(`${container} .c6`, {
  color: '#E0115F'
})

globalStyle(`${container} .c7`, {
  color: '#FF0800'
})

globalStyle(`${container} .c8`, {
  color: '#FD6A02'
})

globalStyle(`${container} .c9`, {
  color: '#EB9605'
})
