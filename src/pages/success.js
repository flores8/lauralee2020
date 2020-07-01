import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Success!" />
      <div class="content-container text">
        <h1>You're in!</h1>
        <p>
          Welcome, you're officially on the list! You'll need to confirm your
          email. Once it's confirmed you'll hear from when content is available.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
