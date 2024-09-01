import React from "react"
import "../link/links.css"
import "./footer.css"

const Footer = () => (
  <footer className="page__footer">
    <div className="copyright">© {new Date().getFullYear()}</div>
    <div className="online-presence">
      <div className="link-wrapper">
        <a href="https://lauraleeflores.s3.amazonaws.com/lauralee-flores-resume-08-2024.pdf">
          Resume
        </a>
      </div>
      <div className="link-wrapper">
        <a href="http://lauralee.design/">Dribbble</a>
      </div>
      <div className="link-wrapper">
        <a href="https://www.linkedin.com/in/lauraleeflores/">LinkedIn</a>
      </div>
    </div>
  </footer>
)

export default Footer
