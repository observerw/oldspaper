import { graphql } from "gatsby";
import React from "react";
import { Tab } from '@headlessui/react'
import PageContainer from "@/components/page-container";
import { ImageDataLike } from "gatsby-plugin-image";

export const pageQuery = graphql`
query {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        category: fieldValue
        count: totalCount
        edges {
          node {
            id
            frontmatter {
              title
              slug
              author
              category
              date
              img {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ({ data }: {
  data: {
    allMarkdownRemark: {
      group: {
        category: string,
        count: number,
        edges: {
          node: {
            id: string,
            frontmatter: {
              title: string,
              slug: string,
              author: string,
              category: string,
              date: string,
              img: {
                childImageSharp: {
                  gatsbyImageData: ImageDataLike
                }
              }
            }
          }
        }[]
      }[]
    }
  }
}) => {
  console.log(data);

  const { allMarkdownRemark: { group } } = data;
  const categories = group.map(({ category }) => category);
  const nodes = group.map(({ edges }) => edges.map(({ node }) => node));


  return <PageContainer>
    <div className="center-container h-full">
      <Tab.Group>
        <Tab.List>
          {categories.map(category => {
            return <Tab className='mx-2' key={category}>{category}</Tab>
          })}
        </Tab.List>
        <Tab.Panels>
          {nodes.map(node => {
            return <Tab.Panel key={node.id}>
              {1}
            </Tab.Panel>
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  </PageContainer>
}