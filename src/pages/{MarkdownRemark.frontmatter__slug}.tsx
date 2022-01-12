import React, { useEffect } from "react"
import { graphql } from "gatsby"
import "../styles/md-page.sass"
import tw from "tailwind-styled-components"
import PageContainer from "../components/page-container"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import BlogHelper from "../components/blog-helper"
import star from "../static/pics/star.png"

const Title = tw.div`
  text-5xl font-bold text-center w-fit mb-2 border-b-[10px] border-blue-500/50
`

const Info = tw.span`
  text-gray-400
`

const Container = tw.div`
  p-10
  rounded-b-lg
  bg-white
  dark:bg-slate-800
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark
  let date = new Date(frontmatter.date);
  let dateStr = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`

  useEffect(() => {
    deckDeckGoHighlightElement();
  }, [])

  return (
    <PageContainer>
      <div className="lg:grid grid-cols-5">
        <div className="invisible lg:visible">
          <div id="blog-TOC" className="fixed top-1/3 left-10" dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
        </div>
        <div className="col-span-3 m-5">
          <div className="blog-post">
            <img src={star} className="w-full max-h-[500px] mb-0 rounded-t-lg" />
            <Container id="blog-content">
              <Title>
                {frontmatter.title}
              </Title>
              <Info>
                {dateStr}
              </Info>
              <article dangerouslySetInnerHTML={{ __html: html }} />
            </Container>
          </div>
        </div>
        <div className="center-container invisible lg:visible">
        </div>
      </div>
      <BlogHelper />
    </PageContainer>

  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents
      frontmatter {
        slug
        title
        date
      }
    }
  }
`