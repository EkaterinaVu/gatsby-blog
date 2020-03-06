import React from "react"
import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import "../styles/global-reset.css"
import SideBar from "../components/side-bar"

const MainHeader = styled("div")`
  padding: ${rhythm(0.5)};
  text-align: left;
  height: ${rhythm(4)};
  grid-row: 2/3;
  grid-column: 1/-1;
  z-index: 10;
  margin-left: ${rhythm(9)};
`
const MainTitle = styled("h1")`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: red;
  -webkit-text-stroke-width: 1px;
  letter-spacing: 0.05em;
  font-size: 96px;
  margin-top: 0;
`

const BlogContainer = styled("div")`
  grid-row: 3/4;
  grid-column: 2/-1;
  display: flex;
  flex-direction: column;
  margin-left: ${rhythm(4)};
  @media screen and (max-width: 600px) {
    grid-column: 1/-1;
  }
`

export default () => {
  return (
    <>
      <Layout>
        <SideBar></SideBar>
        <MainHeader>
          <MainTitle>Blog</MainTitle>
        </MainHeader>
        <BlogContainer>
          <PostPreview></PostPreview>
        </BlogContainer>
      </Layout>
    </>
  )
}
