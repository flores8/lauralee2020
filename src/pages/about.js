import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/about.css"
import { Link } from "gatsby"

const About = () => (
  <Layout>
    <Seo title="About" />
    <div className="about">
      <div className="wide-wrapper text" style={{ textAlign: "center" }}>
        <h1>AI is Changing How We Create (And I'm Here For It)</h1>
      </div>
      <div
        style={{
          maxWidth: `715px`,
          marginBottom: `3rem`,
          marginRight: `auto`,
          marginLeft: `auto`,
        }}
      >
        <Image />
      </div>
      <div className="skinny-wrapper text">
        <p>I'll never forget the first time I used AI to create an image.</p>
        <p>
          With just a few words describing my vision, I watched as an image
          materialized before my eyes—something uniquely beautiful, generated in
          seconds. In that moment, I realized everything I knew about creative
          work was about to change.
        </p>
        <p>
          As a product designer with over 15 years of experience, I'd spent my
          career mastering professional creative tools. But this was different.
          This wasn't just another tool—it was a revolution that would make
          creative expression accessible to everyone, regardless of their
          technical skills.
        </p>
        <p>
          Now, as a Staff Product Designer at Weights & Biases, I have a
          front-row seat to this transformation. Here's what excites me most
          about where we're heading:
          <ul>
            <li>
              <strong>We're breaking creative barriers:</strong> I'm watching AI
              tools help both seasoned designers and complete beginners bring
              their ideas to life. The gap between vision and execution is
              shrinking daily.
            </li>
            <li>
              <strong>Our creative process is evolving: </strong>Every week
              brings new tools that change how we approach design and
              creativity. We're only just scratching the surface!
            </li>
            <li>
              <strong>We're learning together: </strong>The field is moving so
              quickly that everyone, from experts to beginners, is discovering
              and adapting together.
            </li>
          </ul>
        </p>
        {/* <p>→ [Get my free guide: "5 Essential AI Tools for Creative Work"]</p> */}
        <p>
          As I explore this new creative landscape, I'm documenting everything:
          the breakthroughs, the setbacks, and the unexpected discoveries.
          You'll find practical tutorials, behind-the-scenes looks at my
          AI-powered design work, and step-by-step guides for specific creative
          tasks.
        </p>

        <p>Want to follow along? Here's how to join me on this journey:</p>
        <p>
          ✨Follow me on{" "}
          <a href="https://www.linkedin.com/in/lauraleeflores/">LinkedIn</a> for
          tips, tool reviews, and quick tutorials
        </p>
        {/* <p>💌 Get detailed guides straight to your inbox [Subscribe →]</p>
        <p>
          🔍 Start now: Download "5 Essential AI Tools for Creative Work" and
          start exploring these tools today [Download Free Guide →]
        </p> */}
      </div>
    </div>
  </Layout>
)

export default About
