import { graphql, Link } from "gatsby";
import React from "react";
import { Tab } from '@headlessui/react'
import PageContainer from "@/components/page-container";
import { ImageDataLike } from "gatsby-plugin-image";
import BlogList from "@/components/blog-list";
import { categoryList } from "@/utils/category";



export const pageQuery = graphql`
query {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        category: fieldValue
        count: totalCount
        edges {
          node {
            id
            excerpt
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
            excerpt: string,
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
  const allEdges = group.map(({ edges }) => edges);


  return <PageContainer>
    <div className="h-full flex flex-col items-center">
      <Tab.Group>
        <Tab.List className='
        flex items-end 
        w-2/3 h-[300px]
        rounded-lg'>
          {categories.map(category => {
            return <Tab
              className={({ selected }) => selected ?
                "transparent-block title-block w-full h-12 m-2 bg-gray-300 dark:bg-slate-600" :
                "transparent-block title-block w-full h-12 m-2 bg-slate-50"
              } key={category}>
              {categoryList[category].name}
            </Tab>
          })}
        </Tab.List>
        <Tab.Panels className='mt-2 w-2/3 h-auto'>
          {allEdges.map(edges => (
            <Tab.Panel className='rounded-xl p-3'>
              {
                <BlogList edges={edges} />
              }
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  </PageContainer>
}

// 'transparent-block title-block
//               focus:bg-slate-300  dark:focus:bg-slate-600
//                w-full h-12 m-2'