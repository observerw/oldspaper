import { graphql, Link } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useImmer } from "use-immer";
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

const Basic = tw.div`
    content-block my-2 p-4 bg-opacity-70 backdrop-filter backdrop-blur
`

const Main = tw(Basic)`
    my-2 p-4 w-[300px] lg:w-[500px] h-[150px] border-b-8  border-blue-500/50 
`

const Normal = tw(Basic)`
    flex flex-col justify-center my-2 w-[240px] lg:w-[400px] h-[100px]
`

const BUFFER_SIZE = 5

class CircularQueue<T> {
    data: T[]
    now: number = 0

    constructor(arr: T[]) {
        this.data = arr
    }

    next() {
        this.now = (this.now + 1) % this.data.length
        return this.data[this.now]
    }
}

const List: React.FC<{
    edges: IEdge[]
}> = ({ edges }) => {
    const CQ = new CircularQueue(edges)
    const [buffer, setBuffer] = useState<IEdge[]>([]);
    useEffect(() => {
        for (let i = 0; i < BUFFER_SIZE; i++) {
            setBuffer(buffer => [...buffer, CQ.next()])
        }

        const interval = setInterval(() => {
            setBuffer(buffer => [CQ.next(), ...buffer.slice(0, -1)])
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {
                edges.map(({
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