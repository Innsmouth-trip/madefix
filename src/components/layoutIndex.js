/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import PropTypes from "prop-types"
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";




const LayoutIndex = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryIndex {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      { children }
       <ScrollUpButton />
    </>
  )
}

LayoutIndex.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutIndex
