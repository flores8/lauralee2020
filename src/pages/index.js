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
            Hi, I’m Lauralee, a product person living in Arizona. I am
            passionate about creating usable, desirable, and beautiful products.
          </h1>
          <p class="home-content__text text">
            Currently working remotely at{" "}
            <a
              href="https://wandb.ai/site"
              class="link link--move-up text-link-wrapper"
            >
              Weights & Biases
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
