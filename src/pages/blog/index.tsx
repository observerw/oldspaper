import React from "react"
import { graphql, Link } from "gatsby"
import PageContainer from "../../components/page-container"

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          slug
        }
        id
      }
    }
  }
}
`

export default ({ data }) => {
  const { allMarkdownRemark: { edges } } = data
  return <PageContainer>
    <div className="center-container flex-col h-full">
      <h1>blog list:</h1>
      {
        edges.map(({ node: { frontmatter: { title, slug } } }) => {
          return <p><Link to={slug}>{title}</Link></p>
        })
      }
    </div>
  </PageContainer>
}



