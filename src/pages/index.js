import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.css"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div class="home-content">
        <h1 class="home-content__headline text">
          Hi 👋 I’m Lauralee, a product designer diving deep into AI for
          creative work. I'm sharing what I learn along the way.
        </h1>
        <h2 class="home-content__subheadline text">
          Join me in making something beautiful - zero creative experience
          required ✨
        </h2>
        <Link to="/about" className="text-link-wrapper text-size">
          Learn more →
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
