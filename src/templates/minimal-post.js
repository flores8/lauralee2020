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
        template
      }
      body
    }
  }
`

const MinimalPostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <div className="blog-post narrow">
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
  </Layout>
)

export default MinimalPostTemplate
