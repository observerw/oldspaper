import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import "@/styles/md-page.sass"
import tw from "tailwind-styled-components"
import PageContainer from "@/components/page-container"
import BlogHelper from "@/components/blog-helper"
import { useUtterances } from "@/hooks/utterances"
import { ImageDataLike } from 'gatsby-plugin-image'
import Img from "@/components/blog-image"
import { Helmet } from "react-helmet"
import DateInfo from "@/components/blog-date"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons"
import { categoryList } from "@/utils/category"

const Title = tw.div`
  font-bold text-center w-fit mb-2 border-b-[10px] border-blue-500/50
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
  invisible lg:visible
`

const Next = tw(Link)`
  content-block col-span-2 rounded-lg p-2
  flex items-center
`

const NextTitle = tw(Title)`
  text-xl border-b-[5px]
`

const Comment = () => {
  const commentID = useUtterances()
  return <div className="rounded-lg p-4 mt-2" id={commentID} />
}

export default ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark, allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, id, tableOfContents, wordCount: { words } } = markdownRemark
  const { title, slug, img, category, date, author } = frontmatter

  const { edges } = allMarkdownRemark;

  const prev = edges.find(({ node }) => node.id === id)?.previous;
  const next = edges.find(({ node }) => node.id === id)?.next;

  const prevTitle = prev?.frontmatter.title ?? "没有了";
  const prevCategory = prev?.frontmatter.category ?? "";
  const prevSlug = prev?.frontmatter.slug ?? "";
  const nextTitle = next?.frontmatter.title ?? "没有了";
  const nextCategory = next?.frontmatter.category ?? "";
  const nextSlug = next?.frontmatter.slug ?? "";


  return (
    <PageContainer>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Grid>
        <Side className="flex justify-center">
          {tableOfContents &&
            <div id="blog-TOC" className="
            p-5 mt-10 sticky top-20 h-fit
            2xl:w-[307px] xl:w-[256px] lg:w-[204px]
            rounded-lg bg-slate-50 dark:bg-slate-800"
              dangerouslySetInnerHTML={{ __html: tableOfContents }} />}
        </Side>
        <Content>
          <Img className="w-full h-[300px] lg:h-[450px] mb-0 rounded-t-lg object-cover"
            imageData={img as ImageDataLike} />
          <div className="content-block rounded-b-lg p-10 mb-2" id="blog-content">
            <Title className="text-5xl"> {title} </Title>
            <Info>
              <DateInfo rawDate={date as string} />
              <span className="ml-2">{words}字</span>
            </Info>
            <article dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <div className="w-full h-fit min-h-16 grid grid-cols-5 gap-2">
            <Next to={`/${prevCategory}/${prevSlug}`}>
              <ArrowLeftOutlined />
              <div className="flex-1 center-container">
                <NextTitle>
                  {prevTitle}
                </NextTitle>
              </div>
            </Next>
            <Link to={`/${category}`}
              className="center-container content-block rounded-lg">
              <div className="text-2xl font-bold">
                {categoryList[category].name}
              </div>
            </Link>
            <Next to={`/${nextCategory}/${nextSlug}`}
              className="justify-end">
              <div className="flex-1 center-container">
                <NextTitle>
                  {nextTitle}
                </NextTitle>
              </div>
              <ArrowRightOutlined />
            </Next>
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
      id
      tableOfContents
      frontmatter {
        title
        slug
        img {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        category
        date
        author
      }
      wordCount {
        words
      }
    }
    allMarkdownRemark {
      edges {
        next {
          frontmatter {
            category
            slug
            title
          }
        }
        node {
          id
        }
        previous {
          frontmatter {
            category
            slug
            title
          }
        }
      }
    }
  }
`