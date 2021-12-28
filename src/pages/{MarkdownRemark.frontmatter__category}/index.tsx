import { graphql } from "gatsby"
import React from "react"

export const pageQuery = graphql`
query($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      category
    }
  }
}
`

export default ({ data }) => {
    const { category } = data;
    return <div>
        <h1>{category}</h1>
    </div>
}