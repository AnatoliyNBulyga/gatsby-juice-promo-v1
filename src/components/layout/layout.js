import React from "react"
import { GlobalStyle } from "../../styles/GlobalStyles"
// import {gsap} from 'gsap'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Layout
