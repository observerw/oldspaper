import React from "react"
import { graphql, Link } from "gatsby"
export default ({ data }) => {
  const { allMarkdownRemark: { edges } } = data
  return <div>
    <h1>blog list:</h1>
    {
      edges.map(({ node: { frontmatter: { title, slug } } }) => {
        console.log(slug);

        return <p><Link to={slug}>{title}</Link></p>
      })
    }
  </div>
}

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

