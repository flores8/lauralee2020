import React from "react"
import styled from "styled-components"
import { FiAlertCircle } from "react-icons/fi"
import { ImQuotesLeft } from "react-icons/im"
import { neutral, blue, yellow, typeScale } from "../../utils"

const Blockquotes = ({ children, display }) => {
  if (display === "warning")
    return (
      <Wrapper>
        <div className="container warning">
          <FiAlertCircle className="icon" />
          {children}
        </div>
      </Wrapper>
    )
  if (display === "minimal")
    return (
      <Wrapper>
        <div className="container minimal">{children}</div>
      </Wrapper>
    )
  if (display === "default") {
    return (
      <Wrapper>
        <div className="container default">{children}</div>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <div className="container info">
          <ImQuotesLeft className="icon" />
          {children}
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.blockquote`
  max-inline-size: 700px;
  margin-inline-start: auto;
  margin-inline-end: auto;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  .container {
    padding: 2rem;
    padding-block-start: 2.5rem;
    background: ${neutral[200]};
    color: ${neutral[700]};
    border-inline-start: 3px solid ${neutral[500]};
    position: relative;
    margin: 2rem 0;
    p {
      font-size: ${typeScale.paragraph};
      margin-block-start: 0.75rem;
      margin-block-end: 1.25rem;
    }
  }
  @media (min-width: 1170px) {
    .container {
      margin-inline-start: -2rem;
      margin-inline-end: -2rem;
    }
  }
  .icon {
    position: absolute;
    top: 0;
    left: calc(50% - 20px);
    background: ${blue[100]};
    transform: translate(-50%, -50%);
    inline-size: 70px;
    block-size: 70px;
    border-radius: 50%;
    border: 6px solid ${blue[100]};
    padding: 0.5rem;
  }
  .info {
    background: ${blue.white};
    color: ${neutral[700]};
    border: 5px solid ${blue[100]};
    .icon {
      color: ${blue[600]};
    }
    ul {
      list-style: none;
      margin-left: 0;
      li {
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: ${typeScale.smallText};
      }
    }
  }
  .warning {
    background: ${yellow[200]};
    color: ${yellow[900]};
    border-color: ${yellow[700]};
    .icon {
      color: ${yellow[700]};
    }
  }
  .minimal {
    background: ${neutral[100]};
    border-inline-start: none;
    text-align: center;
    font-size: ${typeScale.header5};
    color: ${neutral[600]};
    font-style: italic;
    letter-spacing: 1px;
    padding-block-start: 2rem;
    padding-block-end: 2rem;
    padding-inline-start: 2.5rem;
    padding-inline-end: 2.5rem;
  }
`

export default Blockquotes
