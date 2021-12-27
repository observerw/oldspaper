import React from "react"
import { graphql } from "gatsby"
import "../styles/github.css"
import tw from "tailwind-styled-components"
import Footer from "../components/footer"

const Title = tw.h1`
  text-center
`

const Container = tw.div`
  container
  border-2
  m-5
  p-10
  rounded-lg
  shadow-lg
  bg-white
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="flex flex-col items-center justify-center bg-indigo-50">
      <div className="blog-post">
        <Title>{frontmatter.title}</Title>
        {/* <h2>{frontmatter.date}</h2> */}
        <Container
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {/* <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                /> */}
      </div>

      <Footer/>
    </div>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`