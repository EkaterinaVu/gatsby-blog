import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import usePosts from "../hooks/use-posts"
import { rhythm } from "../utils/typography"
import StyledArrow from "./styled-arrow"
import StyledTag from "./styled-tag"


const ArticlePreview = styled("div")`
  display: flex;
  flex-wrap: wrap;
  padding: ${rhythm(0.5)};
  max-width: 90%;
  @media screen and (max-width: 600px) {
    max-width: 95%;
  }
`

const PostPreview = () => {
  const posts = usePosts()
  return (
    <ArticlePreview>
      {posts.map(post => (
        <article
          key={post.title}
          css={css`
            width: 100%;
          `}
        >
          <Link to={post.slug}>
            {" "}
            <h2
              css={css`
                color: var(--primary);
                padding: 0 ${rhythm(2)};
              `}
            >
              {post.title}
            </h2>
          </Link>
          <p
            css={css`
              padding: 0 ${rhythm(2)};
            `}
          >
            {post.excerpt}
            <StyledArrow
              to={post.slug}
              side="right"
              css={css`
                font-size: 1.5rem;
                vertical-align: sub;
                margin-left: ${rhythm(0.5)};
              `}
            ></StyledArrow>
          </p>
          <ul
            css={css`
              padding: 0 ${rhythm(0.5)};
            `}
          >
            {post.tags.map(tag => (
              <StyledTag>{tag}</StyledTag>
            ))}
          </ul>
          <hr></hr>
        </article>
      ))}
    </ArticlePreview>
  )
}

export default PostPreview
