import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/design.css"
import { Link } from "gatsby"
import Image from "gatsby-image"
import usePosts from "../hooks/use-posts"

const Design = () => {
  const posts = usePosts()
  return (
    <Layout>
      <SEO title="Design" />
      <div class="design">
        <div class="full-wrapper grid-12-column">
          <h1>Design</h1>
          <p class="design subtitle">
            Articles and resources on product design.
          </p>
        </div>
        {posts.map(post => (
          <article class="full-wrapper">
            <Link to={`/design/${post.slug}`} class="article-image-wrapper">
              <Image fluid={post.image.sharp.fluid} alt={post.image_alt} />
            </Link>
            <div class="article-intro">
              <h3>
                <Link to={`/design/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.description} test</p>
              <Link
                to={`/design/${post.slug}`}
                class="text-link-wrapper read-article"
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

export default Design
