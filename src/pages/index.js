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

          {/* Pure Chat */}
          <div class="home-content__resume-title text">
            <h3>User Experience and Product Designer</h3>
            <p>Pure Chat</p>
          </div>
          <div class="home-content__resume-job text">
            <p>
              <span>2015 - 2016</span>Pure Chat is a live chat sofware platform.
              I was the first product designer hired at the company. My
              responsibilities included endto-end product design from concept
              exploration through prototyping, visual design details, user
              experience and product strategy and direction.
            </p>
          </div>

          {/* Freelancing */}
          <div class="home-content__resume-title text">
            <h3>User Experience and Product Design Consultant</h3>
            <p>Creative One</p>
          </div>
          <div class="home-content__resume-job text">
            <p>
              <span>2010 - 2015</span>I led end-to-end projects for diverse
              clients, specializing in UX and product design. My expertise
              ranged from conducting in-depth user research and developing
              strategic UX recommendations to executing comprehensive usability
              studies for optimizing product experiences. I crafted designs for
              new products (0 to 1) and revamped core product areas.
            </p>
          </div>

          {/* U of I  */}
          <div class="home-content__resume-title text">
            <h3>Head of User Research</h3>
            <p>University of Idaho</p>
          </div>
          <div class="home-content__resume-job text">
            <p>
              <span>2008 - 2010</span>Hired, trained, and lead UX and Web
              Analyst team of 20+. Oversaw all UX efforts. Started and ran a web
              analytics team using this information as an additional data point
              for UX recommendations.
            </p>
          </div>

          {/* Freelancing */}
          <div class="home-content__resume-title text">
            <h3>User Researcher</h3>
            <p>University of Idaho</p>
          </div>
          <div class="home-content__resume-job text">
            <p>
              <span>2007 - 2008</span>Collaborated with stakeholders, defined
              research questions, selected appropriate methods of data
              collection, recruited participants, conducted research studies,
              analyzed the data, transformed data into insights, presented
              findings and recommendations to stakeholders.
            </p>
          </div>

          {/* UX Instructor */}
          <div class="home-content__resume-title text">
            <h3>UX Instructor</h3>
            <p>University of Idaho</p>
          </div>
          <div class="home-content__resume-job text">
            <p>
              <span>2006 - 2008</span>Developed and taught undergraduate and
              graudate courses on the fundamentals of how to create a
              user-centered product, UX fundamentals, information architecture,
              interaction design, and usability testing.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
