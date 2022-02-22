import React, { useMemo } from 'react'
import { Link } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

import Img from "@/components/blog-image"
import DateInfo from "@/components/blog-date"
interface IEdge {
    node: {
        id: string,
        excerpt: string,
        frontmatter: {
            title?: string,
            date?: string,
            author?: string,
            category?: string,
            slug?: string,
            img: ImageDataLike
        }
    }
}

const List: React.FC<{
    edges: IEdge[],
}> = ({ edges }) => {
    const sortedEdges = useMemo(() => {
        return edges.sort((a, b) => {
            const aDate = new Date(a.node.frontmatter.date!)
            const bDate = new Date(b.node.frontmatter.date!)
            return bDate.getTime() - aDate.getTime()
        })
    }, [edges])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {
                sortedEdges.map(({
                    node: {
                        id,
                        excerpt,
                        frontmatter: {
                            title,
                            date,
                            author,
                            category,
                            slug,
                            img
                        }
                    }
                }, index) => {
                    const href = `/${category}/${slug}`
                    return <div key={id + index} className="relative w-full h-[250px]">
                        <Img className="h-full w-full rounded-lg object-cover" imageData={img} />
                        <div>
                            <Link to={href} className="
                                absolute bottom-0 
                                w-full h-1/2
                                hover:h-full transform duration-300
                                p-2 rounded-lg
                                bg-opacity-50 bg-slate-700 dark:bg-slate-200 
                                backdrop-filter backdrop-blur firefox:bg-opacity-90
                                overflow-hidden overflow-ellipsis">
                                <div className="text-2xl font-bold
                            text-gray-100 dark:text-gray-700
                            ">{title}</div>
                                <div className="text-sm text-gray-300 dark:text-gray-500 pb-2">
                                    <DateInfo rawDate={date} />
                                    <p>
                                        {excerpt}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default List;