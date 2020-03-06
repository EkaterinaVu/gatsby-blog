import { useStaticQuery, graphql } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query($skip: Int!, $limit: Int!) {
      allMdx(limit: $limit, skip: $skip) {
        nodes {
          frontmatter {
            author
            date(formatString: "DD-MM-YYYY")
            slug
            title
            tags
          }
          excerpt
        }
      }
    }
  `)
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    date: post.frontmatter.date,
    slug: post.frontmatter.slug,
    tags: post.frontmatter.tags,
    excerpt: post.excerpt,
  }))
}

export default usePosts
