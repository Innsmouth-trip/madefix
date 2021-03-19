import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import travolta from "../images/travolta.gif"
import { Link } from "gatsby"



const Notfound = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
justify-content: center;
margin-top: 22px;
min-height: 78vh;
text-align: center;
color: white;


.prevlnk {
  color: white;
  width: 200px;
  font-size: 16px;
  margin: 20px 0px 20px 0px;
  padding: 0.25em 1em;
  border: 2px solid #4585ef;
  border-radius: 3px;
  background: #4585ef;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-family: 'PT Sans', sans-serif;
  align-self: center;

  &:active {
    background: #20242A;
    color: white;
    border: 2px solid #20242A;
}

`

const Bgwrap = styled.div`
background: #101010;

`


const NotFoundPage = () => (
  <Bgwrap>
  <Layout>
    <SEO title="404: Страница не найдена" />
      <Notfound>
      <h1>Страница не найдена</h1>
       <img src={travolta} alt="John" />
      <p>К сожалению, запрашиваемая страница не найдена, но есть другие, тоже хорошие</p>
        <Link to="/" className="prevlnk">На главную</Link>
      </Notfound>
  </Layout>
 </ Bgwrap>
)

export default NotFoundPage
