exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
        nodes {
          frontmatter {
            slug
            template
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach((post, index) => {
    if (post.frontmatter.template === "minimal") {
      actions.createPage({
        path: `/blog/${post.frontmatter.slug}`,
        component: require.resolve("./src/templates/minimal-post.js"),
        context: {
          slug: `${post.frontmatter.slug}`,
          next: index === [posts.length - 1] ? null : posts[index + 1],
          previous: index === 0 ? null : posts[index - 1],
        },
      })
    } else {
      actions.createPage({
        path: `/blog/${post.frontmatter.slug}`,
        component: require.resolve("./src/templates/post.js"),
        context: {
          slug: `${post.frontmatter.slug}`,
          next: `${index === posts.length - 1 ? null : posts[index + 1].node}`,
          previous: index === 0 ? null : posts[index - 1].node,
        },
      })
    }
  })
}
