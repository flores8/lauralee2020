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
            Hi, I’m Lauralee, a Product Designer in Arizona. I am passionate
            about creating desirable, beautiful products.
          </h1>
          <p class="home-content__text text">
            Currently working at{" "}
            <a
              href="https://www.cssacademy.com/"
              class="link link--move-up text-link-wrapper"
            >
              CSS Academy
            </a>{" "}
            and{" "}
            <a
              href="https://www.empathetic.io/"
              class="link link--move-up text-link-wrapper"
            >
              Empathetic
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
