import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import { css } from "styled-components"
import { typeScale } from "../utils"

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

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <div className="text">
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
  </Layout>
)

export const Code = css`
  padding-block-start: 0px;
  padding-block-end: 0px;
  padding-inline-start: 0.25rem;
  padding-inline-end: 0.25rem;

  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0.05rem;
  margin-inline-end: 0.05rem;
  border-radius: 0.2rem;
  white-space: normal;
  font-size: ${typeScale.paragraph};
  letter-spacing: 0.5px;
  vertical-align: text-bottom;
`

export default PostTemplate
