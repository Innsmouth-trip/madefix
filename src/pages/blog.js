import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"


const PostItem = styled.div`
display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0px 30px 30px 30px;
    box-shadow: 0px 4px 17px -5px rgba(0,0,0,0.37);
    color:#20242a;
    position: relative;

.bloglink {
      color: #20242a;
      padding-left: 0px;
      &:active {
       color: #20242a !important;
      }
}

img {
  margin: 0px;
}
  .description {
    padding: 0px 0px 20px 7px;
  }

  h2 {
      margin: 20px 0px 20px 0px;
      font-size: 22px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }

`

const BlogWrap = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 22px;

`

const BlogPost = ({node}) => {
  return (
    <PostItem>
      <Link to={node.slug} className="bloglink">
      <img alt={node.title} src={node.featureImage.fluid.src}/>
      <div className="description">
      <h2>{node.title}</h2>
      <div>{node.content.childMarkdownRemark.excerpt}</div>
      </div>
      </Link>
    </PostItem>

  )
}
const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Блог Александра Соколенко" description="Интересные статьи, истории работы с клиентами и многое другое в этом блоге!"/>
  <BlogWrap>
    {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
  </BlogWrap>
</Layout>
)

export default BlogPage

export const pageQuery = graphql`
   query pageQuery {
    allContentfulBlog (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort:{ fields: [publishDate], order: DESC }
    ) {
        edges {
          node {
            title
            slug
            content {
              childMarkdownRemark {
                excerpt
              }
            }
            featureImage {
            fluid(maxWidth: 400, maxHeight: 250)  {
                src
              }
            }
          }
        }
    }
   }
`
