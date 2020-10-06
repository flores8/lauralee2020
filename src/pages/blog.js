import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/blog/blog.css"
import "../components/content-container/content-container.css"
import { Link } from "gatsby"
import usePosts from "../hooks/use-posts"

const Blog = () => {
  const posts = usePosts()
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog content-container">
        <h1 className="blog__headline">Articles</h1>
        <p className="blog__subtitle">
          Articles, resources, and thoughts on building beautiful and useable
          web applications.
        </p>
        {posts.map(post => (
          <article className="blog__article">
            <h3 className="blog__title">
              <Link className="blog__title-link text" to={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>
            <p className="blog__date text text--sans">{post.date}</p>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export default Blog
