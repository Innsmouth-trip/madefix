import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"


const StyledImg = styled(Img)`
   z-index: 1;
  margin: 0px 40px 0px 0px;
  width: 50%;
  height: auto;
 // box-shadow: 0 14px 28px rgba(0,0,0,0.50), 0 10px 10px rgba(0,0,0,0.50);

  @media (max-width: 768px) {
    margin: 0px;
      width: 100%;
    overflow: visible !important;
    height: auto;
  }

`


const Image_service = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "service.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />
}
export default Image_service
