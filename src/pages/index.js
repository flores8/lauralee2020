import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
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
            Currently working on a new project called{" "}
            <a href="https://www.cssacademy.io/" class="text-link-wrapper">
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
