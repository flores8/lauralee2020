import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/about.css"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <div className="wide-wrapper text" style={{ textAlign: "center" }}>
        <h6>HI I’M LAURALEE</h6>
        <h1>
          Product designer. Front-end developer. Usability Professional. Writer.
          Entrepreneur.
        </h1>
      </div>
      <div
        style={{
          maxWidth: `715px`,
          marginBottom: `1.45rem`,
          marginRight: `auto`,
          marginLeft: `auto`,
        }}
      >
        <Image />
      </div>
      <div className="skinny-wrapper text">
        <p>
          I’m a Product Designer. I have been very happily working remotely
          since 2008. In 2007 I graduated with a masters degree in
          Human-Computer Interaction. I ran a usability team as well as
          developed and taught courses on user center design and user research
          methods at two different Universities - both in person and online.
        </p>
        <p>
          In 2015 I transitioned fully to a product design role. I’ve found
          design to be much more than just creating beautiful visuals - although
          that is part of it.
        </p>
        <p>
          Design is understanding the person using a product and their goals and
          helping them be successful. It’s also fundamentally about solving
          business problems. I absolutely love what I do.
        </p>
      </div>
      <div className="wide-wrapper text">
        <p className="quote">
          “Design is a funny word. Some people think design means how it looks.
          But of course, if you dig deeper, it’s really how it works.”
        </p>
        <p className="reference">Steve Jobs</p>
      </div>
      <div className="skinny-wrapper text">
        <p>
          In addition to design, I love to create products. I can create pretty
          much any design in HTML and CSS. I have experience with Javascript and
          Ruby on Rails. I created this website in Gatsby and React. I am
          currently starting a new project called{" "}
          <a href="https://www.cssacademy.com/">CSS Academy</a>.
        </p>
      </div>
      <div className="about-cta">
        <a href="https://lauraleeflores.s3.amazonaws.com/flores-resume.pdf">
          View my resume
        </a>
        <a
          href="mailto:lauralee@lauraleeflores.com?Subject=Website%20inquiry"
          target="_top"
        >
          Send me an email
        </a>
      </div>
    </div>
  </Layout>
)

export default About
