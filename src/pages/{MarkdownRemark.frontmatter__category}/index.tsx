import PageContainer from "@/components/page-container";
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BlogList from "@/components/blog-list"

export default ({ data }) => {
  const { markdownRemark: { frontmatter: { category } }, allMarkdownRemark: { edges } } = data;
  const categoryEdges = edges.filter(({ node }) => node.frontmatter.category === category);

  return <PageContainer>
    <div className="grid grid-rows-2">
      <div className="center-container">
        <p className="text-5xl font-bold">
          {category}
        </p>
      </div>
      <div className="center-container">
        <div className="w-1/4">
          <BlogList edges={categoryEdges} />
        </div>
      </div>
    </div>
  </PageContainer>
}

export const pageQuery = graphql`
query($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      category
    }
  }

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