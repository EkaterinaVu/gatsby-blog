import { useStaticQuery, graphql } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx{
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
