import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Disqus from 'disqus-react'
import { Link } from "gatsby"

const Pagewrap = styled.div`

display: flex;
flex-direction: column;

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

const ArticleWrap = styled.div`

box-shadow: 0px 4px 17px -5px rgba(0,0,0,0.37);
padding: 0px 20px 20px 20px;
margin-bottom: 20px;
 p {
   display: flex;
   margin-top: 24px;
   margin-bottom: 0;
   font-size: 19px;
   line-height: 27px;
 }

  img {
   max-height: 494px;
   margin: 28px auto;
 }

 h2 {
   margin-top: 24px;
   margin-bottom: 24px;

 }

`

const ArticleTitleWrap = styled.div`
margin-bottom: 20px;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`

const Date = styled.div`
color: #20242a;
padding: 5px 20px 5px 20px;
font-weight: bold;
text-transform: uppercase;
border-bottom: 2px solid #4585ef;
`

const ArticleTitle = styled.h1`
margin-top: 26px;
text-align: center;
`


class BlogPost extends Component {
  render() {
    const {
      title,
      content
    } = this.props.data.contentfulBlog


    const disqusShortname = 'madefix';
    const disqusConfig = {
       url: 'http://madefix.netlify.com/' + this.props.data.contentfulBlog.slug,
       identifier: content.childMarkdownRemark.id,
       title: this.props.data.contentfulBlog.title
           };
    return (
      <Layout>
        <SEO title={title} description={content.childMarkdownRemark.excerpt} />
        <Pagewrap>
        <ArticleTitleWrap>
          <ArticleTitle> {title}</ArticleTitle>
              <Date>{this.props.data.contentfulBlog.publishDate}</Date>
        </ArticleTitleWrap>
        <ArticleWrap dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} />
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
          <Link to="/blog" className="prevlnk">Назад</Link>
        </Pagewrap>
      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlog(slug: {eq: $slug}) {
      title
      slug
      content {
        childMarkdownRemark {
          html
          excerpt
          id
        }
      }
      publishDate(formatString:  "MMMM DD, YYYY", locale: "ru")
    }
  }

`
