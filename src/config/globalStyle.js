import { createGlobalStyle, css } from 'styled-components'

export const bodyStyles = css``

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
    
  * {
    margin: 0;
    padding: 0;
  }
`
