import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div class="home-content">
        <div class="home-content__left-two-thirds">
          <h1 class="home-content__headline text">
            Hi, I’m Lauralee, a Product Designer in Arizona. I enjoy creating
            products that make people more successful and delighted.{" "}
          </h1>
          <p class="home-content__text text">
            Currently working on a new project called{" "}
            <a href="https://www.cssacademy.io/" class="link link--move-up text-link-wrapper">
              CSS Academy
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
