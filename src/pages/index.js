import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.css"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div class="home-content">
        <div class="home-content__left-two-thirds">
          <h1 class="home-content__headline text">
            Hi 👋 I’m Lauralee, a product designer with 10+ years of experience
            designing, building, and creating. I currently design at Weights &
            Biases.
          </h1>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
