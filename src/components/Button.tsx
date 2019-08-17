import { FunctionComponent } from 'react'

/** @jsx jsx */
import styled, { css } from '@emotion/native'

interface ButtonPropsInterface {
  background?: string
  color?: string
  border?: string
  padding?: string
  variant?: any
  children?: React.ReactNode
}
const Button: React.FC<ButtonPropsInterface> = props => (
  <button
    css={{
      background: '#08e',
      color: 'white',
      padding: '6px 10px',
      border: 'none',
    }}
    {...props}
  />
)

function Example() {
  return (
    <div>
      <Button css={{ marginRight: '1rem' }}>Cancel</Button>
      <Button variant="primary">Save</Button>
      <Button>Hello world</Button>
    </div>
  )
}
