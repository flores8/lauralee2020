import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Lauralee Flores - Product Designer" />
    <div class="home-page-wrapper">
      <div class="home-page">
        <h1>
          Hi, I’m Lauralee, a Product Designer in Arizona. I enjoy creating
          products that make people more successful and delighted.{" "}
        </h1>
        <p>
          Currently Product Designer at{" "}
          <a href="https://kickofflabs.com/">KickoffLabs</a>.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
