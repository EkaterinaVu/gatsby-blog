import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import useTags from "../hooks/use-tags"

const SideBar = () => {
  const data = useTags()
  const { group } = data

  return (
    <aside
      css={css`
        background-color: var(--background-secondary);
        padding: ${rhythm(0.5)};
        grid-column: 1/2;
        grid-row: 1/-1;
        /*border: 1px solid gray;*/
        height: 100vh;
        position: sticky;
        top: 0;
        left: 0;
        display: grid;
        grid-template-rows: 5rem 1fr 3fr;
        @media screen and (max-width: 600px) {
          display: none;
        }
      `}
    >
      <div
        css={css`
          grid-row: 1/2;
        `}
      >
        <Link
          to="/"
          css={css`
            display: inline-block;
            margin-left: ${rhythm(1)};
            margin-top: ${rhythm(0.25)};
            box-shadow: none;
          `}
        >
          <span
            css={css`
              color: red;
              font-weight: 900;
              font-size: 0.875rem;
            `}
          >
            Ekaterina Vujasinović
          </span>
        </Link>
      </div>
      <div
        css={css`
          grid-row: 3/-1;
        `}
      >
        <div
          css={css`
            text-align: center;
          `}
        >
          <Link
            to="/tags/"
            css={css`
              color: var(--primary);
            `}
          >
            <h4>Tags</h4>
          </Link>
        </div>
        <ul
          css={css`
            margin: 0 ${rhythm(1)};
          `}
        >
          {group.map(tag => (
            <li
              key={tag.fieldValue}
              css={css`
                cursor: pointer;
                font-size: 0.875rem;
              `}
            >
              <Link
                to={`/tags/${tag.fieldValue}/`}
                css={css`
                  display: flex;
                  box-shadow: none;
                  justify-content: space-between;
                  color: black;
                  position: relative;
                `}
              >
                <span>{tag.fieldValue}</span>{" "}
                <span
                  css={css`
                    position: absolute;
                    top: 0;
                    right: 0;
                    ::before {
                      content: "";
                      position: absolute;
                      top: 50%;
                      right: 20px;
                      width: 20px;
                      height: 1px;
                      background-color: black;
                    }
                  `}
                >
                  {tag.totalCount}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default SideBar
