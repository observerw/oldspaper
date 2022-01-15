import React from 'react';
import PageContainer from "../components/page-container"
import BlogList from "../components/blog-list"
import Welcome from '../components/welcome';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;

  const welcome = Object.values(Welcome)[Math.floor(Math.random() * Object.values(Welcome).length)];

  return <PageContainer>
    <Helmet>
      <title>oldspaper</title>
    </Helmet>
    <div className="w-full h-screen flex flex-col justify-center lg:flex-row">
      <div className="center-container h-auto">
        {welcome()}
      </div>
      <div className="center-container h-auto flex-col dark:text-white">
        <BlogList edges={edges} />
      </div>
    </div>
  </PageContainer>
}

export const pageQuery = graphql`
query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            auther
            category
            date
            slug
          }
        }
      }
    }
  }
`