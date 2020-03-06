import React from "react"
import Search from "../components/search"
import Layout from '../components/layout'
import {css} from '@emotion/core'

const SearchResults = () => {
  return (
    <Layout>
      <div css={css`grid-area: 2/2/3/3; display: flex; justify-content: center; align-items: center;`}>
      <Search ></Search>
      </div>
    </Layout>
  )
  }
  
  export default SearchResults
