exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          next {
            frontmatter {
              title
              slug
            }
          }
          previous {
            frontmatter {
              title
              slug
            }
          }
        }
        nodes {
          frontmatter {
            slug
            template
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    if (post.frontmatter.template === "minimal") {
      actions.createPage({
        path: `/blog/${post.frontmatter.slug}`,
        component: require.resolve("./src/templates/minimal-post.js"),
        context: {
          slug: `${post.frontmatter.slug}`,
          next: `${post.next}`,
          previous: `${post.previous}`,
        },
      })
    } else {
      actions.createPage({
        path: `/blog/${post.frontmatter.slug}`,
        component: require.resolve("./src/templates/post.js"),
        context: {
          slug: `${post.frontmatter.slug}`,
          next: `${post.next}`,
          previous: `${post.previous}`,
        },
      })
    }
  })
}
