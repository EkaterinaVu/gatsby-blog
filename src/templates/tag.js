import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export const query = graphql`
  query($tag: String!) {
    allMdx(
      limit: 2000
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  console.log(edges[0].node.frontmatter)
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          return (
            <li key={node.frontmatter.slug}>
              <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

export default TagTemplate
