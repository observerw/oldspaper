import PageContainer from "@/components/page-container";
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BlogList from "@/components/blog-list"
import { categoryList } from "@/utils/category";

export default ({ data }) => {
  const { markdownRemark: { frontmatter: { category } }, allMarkdownRemark: { edges } } = data;
  const categoryEdges = edges.filter(({ node }) => node.frontmatter.category === category);

  return <PageContainer>
    <div className="h-full flex flex-col items-center">
      <div className="flex flex-col justify-end w-2/3 h-[300px]">
        <p className="text-5xl font-bold mb-5">
          {categoryList[category].name}
        </p>
        <p className="text-gray-400 text-xl">
          {categoryList[category].desc}
        </p>
      </div>
      <div className="center-container w-2/3 my-2">
        <BlogList edges={categoryEdges} />
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