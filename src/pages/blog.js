import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/blog.css"
import { Link } from "gatsby"
import Image from "gatsby-image"
import usePosts from "../hooks/use-posts"

const Blog = () => {
  const posts = usePosts()
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="design">
        <div className="full-wrapper grid-12-column">
          <h1>Articles</h1>
          <p className="design subtitle">
            Articles and resources on building beautiful and useable web
            applications.
          </p>
        </div>
        {posts.map(post => (
          <article className="full-wrapper">
            <Link to={`/blog/${post.slug}`} className="article-image-wrapper">
              <Image fluid={post.image.sharp.fluid} alt={post.image_alt} />
            </Link>
            <div className="article-intro">
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.description}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-link-wrapper read-article"
              >
                Read Now
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export default Blog
