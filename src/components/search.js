import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SearchBar from "./search-bar"

const Search = () => {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => <SearchBar searchIndex={data.siteSearchIndex.index} />}
    />
  )
}

export default Search
