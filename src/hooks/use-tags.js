import { useStaticQuery, graphql } from "gatsby"

const useTags = () => {
  const data = useStaticQuery(graphql`
    query {
      
      allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  return {
    group: data.allMdx.group,
  }
}

export default useTags
