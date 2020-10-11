import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/github"
import liveTheme from "prism-react-renderer/themes/vsDark"
import styled from "styled-components"
import { neutral, red, typeScale, codeFont } from "../../utils"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

const PrismWrapper = props => {
  const className = props.children.props.className || ""
  const language = className.split("-")[1]
  const reactLive = props.children.props.reactLive
  const children = props.children.props.children.trim()

  if (reactLive) {
    return (
      <LiveProvider code={children} theme={liveTheme}>
        <LiveWrapper>
          <Editor>
            <LiveEditor />
          </Editor>
          <Preview>
            <LivePreview />
          </Preview>
        </LiveWrapper>
        <Error>
          <LiveError />
        </Error>
      </LiveProvider>
    )
  }

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Container>
            <Pre className={className} style={style}>
              <div className="code-tab">{language}</div>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          </Container>
        )
      }}
    </Highlight>
  )
}

const Container = styled.article`
  position: relative;
`
const LiveWrapper = styled.pre`
  background: ${neutral[100]};
  border: 1px solid ${neutral[200]};
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  -webkit-box-align: stretch;
  align-items: stretch;
`
const Editor = styled.div`
  height: 22rem;
  max-height: 22rem;
  flex-basis: 50%;
  max-inline-size: 50%;
  overflow: auto;
  background: rgb(30, 30, 30);
`

const Preview = styled.div`
  flex-basis: 50%;
  width: 50%;
  max-inline-size: 50%;
  padding: 1rem 1.5rem;
  background: ${neutral[100]};
  overflow: auto;
`
const Error = styled.div`
  display: block;
  background: ${red[700]};
  color: ${neutral[100]};
  pre {
    padding: 1rem 1.5rem;
  }
`

const Pre = styled.pre`
  background: ${neutral[100]};
  border: 1px solid ${neutral[200]};
  padding: 1rem 1.5rem 0.5rem 1rem;
  margin: 3rem 0;
  font-size: ${typeScale.paragraph};
  font-family: ${codeFont};
  overflow-x: scroll;
  &::-webkit-scrollbar-track {
    border: none;
    background: transparent;
  }
  .token-line {
    line-height: 1.5;
  }
  .code-tab {
    position: absolute;
    top: 2px;
    right: 5%;
    color: ${neutral[600]};
    font-size: 1rem;
    font-weight: 700;
    transform: translateY(-100%);
    text-transform: uppercase;
    padding: 0.05rem 0.85rem 0;
    background: rgb(246, 248, 250);
    border: 1px solid ${neutral[200]};
    border-bottom: none;
  }
`

const Line = styled.div`
  display: table-row;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1rem;
  user-select: none;
  opacity: 0.5;
  color: ${neutral[800]};
`

const LineContent = styled.span`
  display: table-cell;
`

export default PrismWrapper
