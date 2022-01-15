import { graphql } from "gatsby";
import React from "react";
import { Tab } from '@headlessui/react'
import PageContainer from "@/components/page-container";

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

export default ({ data }) => {
    console.log(data);

    const { allMarkdownRemark: { group } } = data;
    const categories = group.map(({ category }) => category);
    const nodes = group.map(({ edges }) => edges.map(({ node }) => node));
    console.log(nodes);


    return <PageContainer>
        <div className="h-full flex items-center justify-center">
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