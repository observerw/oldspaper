import React, { useEffect } from "react"
import { graphql } from "gatsby"
import "../styles/md-page.sass"
import tw from "tailwind-styled-components"
import PageContainer from "../components/page-container"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import BlogHelper from "../components/blog-helper"
import star from "../static/pics/star.png"

const Title = tw.h1`
  text-center
  absolute
  bottom-5
  left-5
  text-white
  text-6xl
`

const Container = tw.div`
  p-10
  rounded-b-lg
  shadow-lg
  bg-white
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  useEffect(() => {
    deckDeckGoHighlightElement();
  }, [])

  return (
    <PageContainer>
      <div className="grid grid-cols-4">
        <div></div>
        <div className="col-span-2 m-5">
          <div className="blog-post">
            <div className="relative">
            <img src={star} className="w-full max-h-96 mb-0 rounded-t-lg" />
            <Title>{frontmatter.title}</Title>
            </div>
            <Container id="blog-content">
              <article dangerouslySetInnerHTML={{ __html: html }} />
            </Container>
          </div>
        </div>
        <div className="center-container">
          <BlogHelper />
        </div>
      </div>
    </PageContainer>
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