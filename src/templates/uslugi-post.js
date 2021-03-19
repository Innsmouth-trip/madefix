import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Disqus from 'disqus-react'
import { Link } from "gatsby"



const UslugiWrap = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

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

  &:active {
    background: #20242A;
    color: white;
    border: 2px solid #20242A;

  }
}

form {
  margin: 20px;
    box-shadow: 0px 4px 17px -5px rgba(0,0,0,0.37);
  font-size: 18px;
  padding: 20px;
  display: flex;
  max-width: 320px;
  flex-direction: column;
  justify-content: center;
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    input {
      &:focus {
        border: 1px solid #4585ef;
      }
      font-family: 'PT Sans', sans-serif;
    }
    textarea {
       resize: none;
      &:focus {
        border: 1px solid #4585ef;
        width: 100%;
      }
    }
  }
  button {
    color: white;
    width: 200px;
    font-size: 25px;
    margin: 20px 0px 20px 0px;
    padding: 0.25em 1em;
    border: 2px solid #4585ef;
    border-radius: 3px;
    background: #4585ef;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-self: center;
    text-decoration: none;
    font-family: 'PT Sans', sans-serif;

    &:active {
       border-style: outset;
        background: #404754;
    }
    @media (max-width: 768px) {
     align-self: center;
    }
  }
}

`


const Price = styled.div`
color: #20242a;
font-weight: bold;
text-transform: uppercase;
`
const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
 width: 100%;
 flex-wrap: wrap;
`

const Desctiption = styled.div`
`

const UsugaTitle = styled.h1`
margin-top: 26px;
text-align: center;
`

const Raiting = styled.div`
display: flex;
justify-content: flex-start;
font-size: 25px;
padding: 10px 0px 10px 0px;
span {
 color: #4585ef;
}
.schema {
  display: none;
}
`
const UsigiInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`
const PriceDesc = styled.div`
  flex-grow: 3;
`

const Review = styled.h2`

`

class UslugiPost extends Component {
  render() {
    const {
      title,
      price,
      raiting
    } = this.props.data.contentfulUslugi

    const disqusShortname = 'madefix';
    const disqusConfig = {
       url: 'http://madefix.netlify.com/' + this.props.data.contentfulUslugi.slug,
       identifier: this.props.data.contentfulUslugi.id,
       title: this.props.data.contentfulUslugi.title
           };

    return (
      <Layout>
        <SEO title={title} description={this.props.data.contentfulUslugi.description.childMarkdownRemark.excerpt} />
        <UslugiWrap>
          <UsugaTitle>{title}</UsugaTitle>
          <UsigiInfo>
            <ImageWrap>
              <img alt={title} src={this.props.data.contentfulUslugi.uslugiImage.fluid.src}/>
                          <form action="https://formspree.io/mgewewop" method="POST">
                              <h2>Оставить заявку</h2>
                                <label>
                                  <p>Ваше Имя:</p>
                                  <input type="text" name="Имя заказчика"></input>
                                </label>
                                <label>
                                  <p>Ваш телефон:</p>
                                  <input type="tel" name="Телефон"></input>
                                </label>
                                <label>
                                  <p>Опишите кратко проблему:</p>
                                  <textarea name="Сообщение"></textarea>
                                </label>
                                <button type="submit">Отправить</button>
                            </form>
            </ImageWrap>
            <PriceDesc>
              <Price>от {price} рублей</Price>
              <Raiting><span>★★★★★</span><span className="schema">{raiting}</span></Raiting>
              <Desctiption dangerouslySetInnerHTML={{__html: this.props.data.contentfulUslugi.description.childMarkdownRemark.html}} />
              <Review>Отзывы и предложения</Review>
              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </PriceDesc>
          </UsigiInfo>
          <Link to="#service" className="prevlnk">Назад</Link>
        </UslugiWrap>
      </Layout>
    )
  }
}

UslugiPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default UslugiPost

export const uslugiQuery = graphql`
query uslugipageQuery($slug: String!) {
  contentfulUslugi(slug: {eq: $slug}) {
  title
  price
  raiting
  uslugiImage {
    fluid {
      src
    }
  }
  description {
    childMarkdownRemark {
      html
      excerpt
    }
  }
  slug
  id
}
}


`
