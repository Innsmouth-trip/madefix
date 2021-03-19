import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Image_face = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "face.png" }) {
        childImageSharp {
           fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default Image_face
