import { SearchOutlined } from "@ant-design/icons"
import { Transition } from "@headlessui/react"
import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useEffect, useMemo, useState } from "react"

export default () => {

    const [search, setSearch] = useState("")

    const blogList = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              excerpt
              frontmatter {
                title
                date
                category
                author
                slug
              }
            }
          }
        }
      }
    `)

    const result = useMemo(() =>
    (blogList.allMarkdownRemark.edges.filter(({ node }) =>
        search.length !== 0 && node.frontmatter.title.includes(search))), [search])

    return <div className="w-fit relative">
        <span className="
                hidden lg:flex flex-row items-center 
                border-b-4 border-blue-400/50">
            <SearchOutlined />
            <input onChange={(v) => { setSearch(v.target.value) }}
                className="bg-transparent outline-none p-1" />
        </span>
        <Transition
            show={result.length !== 0}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
        >
            <div className="absolute top-10 w-full h-fit p-2 mt-2 rounded-lg
            bg-slate-50 dark:bg-slate-600
            transition duration-200 ease-in-out
            ">
                {result.map(({ node: { frontmatter: { title, category, slug } } }, index) => {
                    return <p className="">
                        <Link to={`/${category}/${slug}`} key={index} className="
                        text-lg font-bold text-gray-500 dark:text-gray-100
                        transparent-block px-1 rounded-md
                        hover:bg-slate-200 dark:hover:bg-slate-400
                        ">
                            {title}
                        </Link>
                    </p>
                })}
            </div>
        </Transition>
    </div>
}