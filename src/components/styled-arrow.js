import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"


const StyledArrow = props => {
  return (
    <Link
      css={css`
        font-weight: 900;
        font-size: 1rem;
        box-shadow: none;
        color: var(--accent);
        display: inline-block;
      `}
      {...props}
    >
      {props.side === "left" ? "\u27f5" : "\u27f6"}
    </Link>
  )
}

export default StyledArrow
