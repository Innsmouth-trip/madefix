import React from "react"
import Layout from "../components/layoutIndex"
import styled from "styled-components"
import SEO from "../components/seo"
import Service from "../components/mainServices"
import AboutMe from "../components/aboutme"
import Faq from "../components/Faq"


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

const Wrap = styled.div`
  background: ${props => props.primary ? "white" : "#4585ef14"};
  display: ${props => props.primary ? "flex" : "flex"};
  justify-content:center;
  align-items: center;
  flex-direction: column;
`



const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Ремонт, сборка и апгрейт вашего ПК" />
  </Layout>
  <AboutMe />
  <Wrap primary>
    <Service />
  </Wrap>
  <Wrap>
     <Faq />
  </Wrap>
  <Footer>
    © {new Date().getFullYear()}, {` `}
    <a href="https://github.com/Innsmouth-trip">Innsmouth-trip</a>
  </Footer>
</>
)

export default IndexPage
