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
            Hi, I’m Lauralee, a product person living in Switzerland. I am
            passionate about creating desirable, beautiful products.
          </h1>
          <p class="home-content__text text">
            Currently working at{" "}
            <a
              href="https://www.hecpartners.com/"
              class="link link--move-up text-link-wrapper"
            >
              HEC Partners
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
