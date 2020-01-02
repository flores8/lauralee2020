import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            id
            fluid {
              src
            }
          }
          relativePath
        }
      }
    }
  `)

  return <Img fluid={ data.allFile.nodes.childIMageSharp} />
}
