import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../links.css"

const navLayout = {
  maxWidth: "1100px",
  width: "100%",
  padding: "1rem 1rem 1rem 0",
  margin: "auto",
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "3fr repeat(3, minmax(50px, 100px))",
}
const linkWrapper = {
  textAlign: "right",
}
const activeStyles = {
  borderBottom: "3px solid hsla(357, 85%, 64%, 1)",
}

const TopNav = ({ siteTitle, className }) => (
  <header style={{ marginBottom: `1.45rem` }} className="page__header header">
    <nav style={navLayout} className="header__top-nav top-nav">
      <Link to="/" className="top-nav__logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62">
          <path
            fill="#F1565D"
            fillRule="evenodd"
            d="M31.5,0 L31.5,24.19 L48.50,24.19 C48.77,24.19 49.00,24.41 49.00,24.69 C49.00,24.76 48.98,24.84 48.95,24.90 L31.5,62 L31.5,37.80 L14.49,37.80 C14.22,37.80 13.99,37.58 13.99,37.30 C13.99,37.23 14.01,37.15 14.04,37.09 L31.5,0 Z"
          />
        </svg>
      </Link>

      <div className="top-nav__link-wrapper link-wrapper" style={linkWrapper}>
        <Link to="/" activeStyle={activeStyles}>
          Home
        </Link>
      </div>
      <div className="top-nav__link-wrapper link-wrapper" style={linkWrapper}>
        <Link to="about" activeStyle={activeStyles}>
          About
        </Link>
      </div>
      <div className="top-nav__link-wrapper link-wrapper" style={linkWrapper}>
        <Link to="blog" activeStyle={activeStyles} partiallyActive={true}>
          Blog
        </Link>
      </div>
    </nav>
  </header>
)

TopNav.propTypes = {
  siteTitle: PropTypes.string,
}

TopNav.defaultProps = {
  siteTitle: ``,
}

export default TopNav
