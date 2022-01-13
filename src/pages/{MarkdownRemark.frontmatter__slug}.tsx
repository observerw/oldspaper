import React, { useEffect } from "react"
import { graphql } from "gatsby"
import "../styles/md-page.sass"
import tw from "tailwind-styled-components"
import PageContainer from "../components/page-container"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import BlogHelper from "../components/blog-helper"
import star from "../static/pics/star.png"
import Img from "gatsby-image"
import { useUtterances } from "../hooks/utterances"

const Title = tw.div`
  text-5xl font-bold text-center w-fit mb-2 border-b-[10px] border-blue-500/50
`

const Info = tw.span`
  text-gray-400
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark
  const { title, slug, img, category, date: rawDate, auther } = frontmatter
  const date = new Date(rawDate);
  let dateStr = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`

  const commentID = useUtterances();

  useEffect(() => {
    deckDeckGoHighlightElement();
  }, [])

  return (
    <PageContainer>
      <div className="lg:grid grid-cols-5">
        <div className="invisible lg:visible">
          <div id="blog-TOC" className="p-5 fixed top-1/3 left-24" dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
        </div>
        <div className="col-span-3 m-5">
          <div className="blog-post">
            <img src={img ?? star} className="w-full max-h-[500px] mb-0 rounded-t-lg" />
            <div className="content-block rounded-b-lg p-10" id="blog-content">
              <Title>
                {frontmatter.title}
              </Title>
              <Info>
                {dateStr}
              </Info>
              <article dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
          <div className="rounded-lg p-4 mt-2" id={commentID} />
        </div>
        <div className="center-container invisible lg:visible">
        </div>
      </div>
      <div className="">

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
        title
        slug
        img
        category
        date
        auther
      }
    }
  }
`