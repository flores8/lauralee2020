import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Success!" />
      <div class="home-page-wrapper">
        <div class="home-page-hero">
          <h1>
            You're in!
          </h1>
          <p>
            Boom! You're officially on the list. You'll need to confirm your email. Once it's confirmed you'll hear from when content is available. 
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
