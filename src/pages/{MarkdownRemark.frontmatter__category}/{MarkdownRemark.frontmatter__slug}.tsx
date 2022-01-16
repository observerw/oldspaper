import React, { useEffect } from "react"
import { graphql } from "gatsby"
import "@/styles/md-page.sass"
import tw from "tailwind-styled-components"
import PageContainer from "@/components/page-container"
import BlogHelper from "@/components/blog-helper"
import { useUtterances } from "@/hooks/utterances"
import { ImageDataLike } from 'gatsby-plugin-image'
import Img from "@/components/blog-image"
import { Helmet } from "react-helmet"

const Title = tw.div`
  text-5xl font-bold text-center w-fit mb-2 border-b-[10px] border-blue-500/50
`

const Info = tw.span`
  text-gray-400
`

const Grid = tw.div`
  lg:grid grid-cols-5
`

const Content = tw.div`
  col-span-3 m-5
`

const Side = tw.div`
  center-container invisible lg:visible
`

const DateInfo = ({ date }: { date?: Date }) => (
  <div>
    {date ? `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日` : ''}
  </div>
)

const Comment = () => {
  const commentID = useUtterances()
  return <div className="rounded-lg p-4 mt-2" id={commentID} />
}

export default ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark
  const { title, slug, img, category, date: rawDate, author } = frontmatter
  const date = new Date(rawDate);
  let dateStr = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  return (
    <PageContainer>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Grid>
        <Side>
          <div id="blog-TOC" className="p-5 fixed top-1/3 left-24"
            dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
        </Side>
        <Content>
          <Img className="w-full h-[300px] lg:h-[450px] mb-0 rounded-t-lg object-cover"
            imageData={img as ImageDataLike} />
          <div className="content-block rounded-b-lg p-10" id="blog-content">
            <Title> {title} </Title>
            <Info>
              <DateInfo date={date} />
            </Info>
            <article dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <Comment />
        </Content>
        <Side>
        </Side>
      </Grid>
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
        img {
          childImageSharp {
            gatsbyImageData(
              height: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        category
        date
        author
      }
    }
  }
`