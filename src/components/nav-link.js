
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const NavLink = styled(Link)`
  color: ${props => (props.color ? props.color : "blue")};
  margin-right: ${rhythm(0.5)};
  padding: ${rhythm(0.25)};
  box-shadow: none;
  font-weight: 900;
  font-family: sans-serif;
  font-size: ${props => (props.size ? props.size : "inherit")};
  display: inline-block;
  height: ${rhythm(1.5)};
  &.current-page {
    border-bottom: 2px solid ${props => (props.color ? props.color : "blue")};
  }
`

export default NavLink
