import React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import "@fontsource/comfortaa"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Global
        styles={css`
          html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            background: #fbcdd4;
          }
          
          body {
            font-family: "Comfortaa";
          }
          
          /**
           * 1. Change the font styles in all browsers.
           * 2. Remove the margin in Firefox and Safari.
           */

          button,
          input,
          optgroup,
          select,
          textarea {
            font-family: inherit; /* 1 */
            font-size: 100%; /* 1 */
            line-height: 1.15; /* 1 */
            margin: 0; /* 2 */
          }

          /**
           * Show the overflow in IE.
           * 1. Show the overflow in Edge.
           */

          button,
          input { /* 1 */
            overflow: visible;
          }

          /**
           * Remove the inheritance of text transform in Edge, Firefox, and IE.
           * 1. Remove the inheritance of text transform in Firefox.
           */

          button,
          select { /* 1 */
            text-transform: none;
          }

          /**
           * Correct the inability to style clickable types in iOS and Safari.
           */

          button,
          [type="button"],
          [type="reset"],
          [type="submit"] {
            -webkit-appearance: button;
            cursor: pointer;
            border: none;
          }
          
        `}
      />
      <Header><h1>POAPathon Create</h1></Header>
      <Body>{children}</Body>
      <Footer>Footer</Footer>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 .5rem;
  
  @media (min-width: 600px) {
    margin: 0 2rem;
  })
`

const Header = styled.div`
  padding: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 600px) {
    padding: 2rem;
  }
`

const Body = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 920px;
`

const Footer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`


export default Layout
