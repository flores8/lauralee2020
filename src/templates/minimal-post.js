import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import styled from "styled-components"
import { primaryFont, typeScale, neutral } from "../utils"

const MinimalPostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <div className="blog-post narrow text">
      <PostBody>
        <MDXRenderer>{post.body}</MDXRenderer>
      </PostBody>
    </div>
  </Layout>
)

const PostBody = styled.article`
  p {
    code {
      background: ${neutral[100]};
      font-family: ${primaryFont};
      padding: 0.25rem;

      margin-block-start: 0px;
      margin-block-end: 0px;
      margin-inline-start: 0.05rem;
      margin-inline-end: 0.05rem;
      border-radius: 0.2rem;
      white-space: normal;
      font-size: ${typeScale.paragraph};
      letter-spacing: 0.5px;
      vertical-align: text-bottom;
    }
  }
`

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

export default MinimalPostTemplate
