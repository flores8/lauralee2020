import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.css"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div class="home-content">
        <h1 class="home-content__headline text">
          Hi 👋 I’m Lauralee, and I can help you use AI to do creative work in
          half the time.
        </h1>
        <div class="home-content__left-two-thirds">
          <h2 class="home-content__subheadline text">
            Zero creative skills required ✨
          </h2>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
