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
          Hi 👋 I’m Lauralee, a product designer with 10+ years of experience
          designing, building, and creating. I currently design at Weights &
          Biases.
        </h1>
        <div class="home-content__resume">
          {/* Weights & Biases */}
          <div class="home-content__resume-title text">
            <h3>Staff Product Designer</h3>
            <p>Weights & Biases</p>
          </div>
          <div class="home-content__resume-job text">
            <p>
              <span>2022 - Present</span>Weights & Biases is an AI developer
              platform. As the first designer hired onto a growing design team,
              I led the creation of the company’s design system, spearheaded UX
              efforts across the organization, and mentored designers as well as
              owning end-to-end product design strategy and implementation.
            </p>
          </div>

          {/* KickoffLabs */}
          <div class="home-content__resume-title text">
            <h3>Senior Product Designer</h3>
            <p>KicoffLabs</p>
          </div>
          <div class="home-content__resume-job text">
            <p>
              <span>2016 - 2020</span>KickoffLabs is a lead generation tool
              using landing pages. As the only product designer at this small
              company, I owned end-to-end UX and product design strategy and
              implementation. Created and implemented a design system. Juggled
              both ambiguous and broad problems/opportunities along with smaller
              well-defined projects.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
