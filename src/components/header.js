import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import NavLink from "./nav-link"
import SearchIcon from "./search-icon"

const Header = ({ theme }) => {
  return (
    <header
      css={css`
        grid-row: 1/2;
        grid-column: 2/-1;
        color: purple;
        display: flex;
        justify-content: flex-end;
        padding: ${rhythm(0.5)};
        position: sticky;
        top: 0;
        @media screen and (max-width: 600px) {
          grid-column: 1/-1;
          justify-content: center;
        }
      `}
    >
      <nav
        css={css`
          display: flex;
          justify-content: space-between;
          flex: 0 1 60%;
        `}
      >
        <NavLink
          to="/"
          activeClassName="current-page"
          className="nav-link"
          color="var(--primary)"
        >
          <span> Home</span>
        </NavLink>

        <NavLink
          to="/work/"
          activeClassName="current-page"
          className="nav-link"
          color="var(--primary)"
        >
          <span> Work </span>
        </NavLink>
        <NavLink
          to="/about-me/"
          activeClassName="current-page"
          className="nav-link"
          color="var(--primary)"
        >
          <span>About</span>
        </NavLink>
      </nav>
      <SearchIcon/>
    </header>
  )
}

export default Header
