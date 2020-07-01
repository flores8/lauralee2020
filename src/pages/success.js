import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Success!" />
      <div class="content-container--narrow text">
        <h1>You're in!</h1>
        <p class="text--sans">
          Welcome, you're officially on the list! You'll need to confirm your
          email. Once it's confirmed you'll hear from me when content is
          available.
        </p>
        <p class="text--sans">
          Normally you would see this on cssacademy.com and soon it will be
          there. But, I'm still working on designing and building it.{" "}
          <span role="img" aria-label="writing some code">
            👩‍💻
          </span>
        </p>
        <p class="text-sans">I'll keep you updated as I make progress.</p>
      </div>
    </Layout>
  )
}

export default IndexPage
