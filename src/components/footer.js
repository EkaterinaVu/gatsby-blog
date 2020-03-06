import React from "react"
import NavLink from "./nav-link"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const Footer = () => {
  return (
    <footer
      css={css`
        grid-column: 2/-1;
        grid-row: 4/-1;
        text-align: center;
        padding: ${rhythm(0.5)};
        @media screen and (max-width: 500px) {
          grid-column: 1/-1;
        }
      `}
    >
      <p
        css={css`
          margin-bottom: ${rhythm(0.5)};
        `}
      >
        All articles written by Ekaterina Vujasinović
      </p>
      <nav>
        <NavLink to="/" color="var(--primary)" size="0.875rem">
          Home
        </NavLink>
        <NavLink to="/work/" color="var(--primary)" size="0.875rem">
          Work
        </NavLink>
        <NavLink to="/about-me/" color="var(--primary)" size="0.875rem">
          About
        </NavLink>
      </nav>
    </footer>
  )
}

export default Footer
