import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled from "@emotion/styled"

const LayoutGrid = styled("div")`
  display: grid;
  grid-template-columns: minmax(280px, 1.5fr) 4fr;
  grid-template-rows: 6rem 12rem minmax(90vh, 1fr) 6rem;
`

const Layout = ({ children }) => {
  return (
    <LayoutGrid>
      <Header />
      {children}
      <Footer />
    </LayoutGrid>
  )
}

export default Layout
