import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: green;
`

const PrimaryButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export const TeriButton = ({ children }) => {
  return <button>{children}</button>
}

export { default as SecondaryButton } from './SecondaryButton'

export default PrimaryButton
