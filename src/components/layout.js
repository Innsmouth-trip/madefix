/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

const Container = styled.div`
margin: 0 auto;
max-width: 1366px;
padding: 0px 1.0875rem 1.45rem;
`

const Main = styled.main`
 display: flex;
 margin-top: 75px;
 min-width: 100%;
 flex-direction: column;
 color: #20242A;
 margin-bottom: 40px;
 & a {
   padding-left: 5px;
   color: white;
   text-decoration: none;
  &:active {
    color:#4585ef;
  }
  }

  @media (max-width: 768px) {
    margin-top: 68px;
  }
`

const Footer = styled.footer`
display: flex;
width: 100%;
align-items: center;
background: #20242A;
color: white;
height: 50px;
padding: 0px 20px 0px 20px;
& a {
  padding-left: 5px;
  color: white;
  text-decoration: none;
 &:active {
   color:#4585ef;
 }
}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
            <Container>
              <Main>{children}</Main>
            </Container>
      <Footer>
        © {new Date().getFullYear()}, {` `}
        <a href="https://github.com/Innsmouth-trip">Innsmouth-trip</a>
      </Footer>
       <ScrollUpButton />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
