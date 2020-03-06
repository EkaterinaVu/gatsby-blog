import React from 'react';
import {  graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"
import { css} from "@emotion/core"
import { rhythm } from "../../src/utils/typography"
import Layout from "../components/layout"
import StyledArrow from "../components/styled-arrow"
import StyledTag from "../components/styled-tag"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date(formatString: "DD-MM-YYYY")
        tags
      }
      body
    }
  }
`
const ArticleContainer = styled("article")`
  padding: ${rhythm(1)};
  grid-column: 2/3;
  grid-row: 2/3;
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <ArticleContainer>
      <p>{post.frontmatter.date}</p>
      <h1
        css={css`
          color: --var(primary);
        `}
      >
        {post.frontmatter.title}
      </h1>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ul>
        {post.frontmatter.tags.map(tag => (
          <StyledTag>{tag}</StyledTag>
        ))}
      </ul>
      <StyledArrow
        to="/"
        side="left"
        css={css`
          font-size: 2rem;
        `}
      />
    </ArticleContainer>
  </Layout>
)

export default PostTemplate
