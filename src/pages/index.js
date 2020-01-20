import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import usePosts from "../hooks/use-posts"
import { Link } from "gatsby"

const IndexPage = () => {
  const posts = usePosts()
  return (
    <Layout>
      <SEO title="Lauralee Flores - Product Designer" />
      <div class="home-page-wrapper">
        <div class="home-page-hero">
          <h1>
            Hi, I’m Lauralee, a Product Designer in Arizona. I enjoy creating
            products that make people more successful and delighted.{" "}
          </h1>
          <p>
            Currently Product Designer at{" "}
            <a href="https://kickofflabs.com/">KickoffLabs</a>.
          </p>
        </div>
        <h2>Read my blog</h2>
        {posts.map(post => (
          <article>
            <h3>
              <Link to={`/design/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.excerpt}</p>
            <Link to={`/design/${post.slug}`}>read this post $rarr;</Link>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
