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
    <div className="flex flex-col items-center">
      <div className="center-container h-[800px]">
        {welcome()}
      </div>
      <div className='w-3/4 lg:w-[500px]'>
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
          excerpt(pruneLength: 120)
          frontmatter {
            title
            author
            category
            date
            slug
            img {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`