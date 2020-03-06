exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            tags
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Failed to create new post", result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })

  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    actions.createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: require.resolve("./src/templates/tag.js"),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
