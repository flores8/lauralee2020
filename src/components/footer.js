import React from "react"
import "./links.css"
import "./footer.css"

const Footer = () => (
  <footer>
    <div class="copyright">© {new Date().getFullYear()}</div>
    <div class="online-presence">
      <div class="link-wrapper">
        <a href="https://lauraleeflores.s3.amazonaws.com/flores-resume.pdf">
          Resume
        </a>
      </div>
      <div class="link-wrapper">
        <a href="https://dribbble.com/lauralee_flores">Dribbble</a>
      </div>
      <div class="link-wrapper">
        <a href="https://www.linkedin.com/in/lauraleeflores/">LinkedIn</a>
      </div>
    </div>
  </footer>
)

export default Footer
