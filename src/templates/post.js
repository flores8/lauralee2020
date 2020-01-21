import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        slug
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout>
)

export default PostTemplate
