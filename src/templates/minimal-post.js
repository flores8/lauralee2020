import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import styled from "styled-components"
import { primaryFont, typeScale, neutral } from "../utils"

const MinimalPostTemplate = ({ data: { mdx: post }, pageContext }) => {
  const { next, previous } = pageContext
  console.log(next)
  return (
    <Layout>
      <div className="blog-post narrow text">
        <PostBody>
          <MDXRenderer>{post.body}</MDXRenderer>
        </PostBody>
      </div>
      <NextPost>
        <div className="links">
          {next && (
            <div className="next">
              <p>
                <Link to={`/blog/${next.frontmatter.slug}`}>Earlier Post</Link>
              </p>
              <Link to={`/blog/${next.frontmatter.slug}`}>
                {next.frontmatter.title}
              </Link>
            </div>
          )}
          {next ? null : (
            <div className="next">
              <p>
                <Link to={`/blog`}>All Posts</Link>
              </p>
              <Link to={`/blog`}>Back to all posts</Link>
            </div>
          )}
          {previous && (
            <div className="previous">
              <p>
                <Link to={`/blog/${previous.frontmatter.slug}`}>
                  Later Post
                </Link>
              </p>
              <Link to={`/blog/${previous.frontmatter.slug}`}>
                {previous.frontmatter.title}
              </Link>
            </div>
          )}
        </div>
      </NextPost>
    </Layout>
  )
}

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
const NextPost = styled.div`
  width: 760px;
  @media (max-width: 800px) {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }
  margin: 0 auto;
  .links {
    display: flex;
    justify-content: space-between;
  }
  .previous {
    text-align: right;
  }
  .previous,
  .next {
    max-width: 180px;
  }
  p {
    font-size: clamp(1rem, 1rem + 0.5vw, 1.25rem);
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    a {
      color: var(--text-color);
      text-decoration: none;
      font-weight: bold;
    }
  }
  a {
    color: var(--text-color);
    text-decoration-color: var(--link-color);
    transition: all 0.4s;
    &:hover {
      color: var(--link-color);
      text-decoration-color: var(--text-color-light);
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
