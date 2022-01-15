import { graphql, Link } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useImmer } from "use-immer";
import Img from "@/components/blog-image"

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
        <div className="flex flex-col w-full items-center justify-center">
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
                    const href = `${category}/${slug}`
                    // return index === Math.floor(BUFFER_SIZE / 2) ?
                    //     <Main key={id + index}>
                    //         <a href={href} className="text-3xl font-bold">{title}</a>
                    //         <p className="text-sm text-gray-500 w-1/2 h-auto mt-5 overflow-hidden overflow-ellipsis whitespace-nowrap">{excerpt}</p>
                    //     </Main>
                    //     :
                    //     <Normal key={id + index}>
                    //         <a href={href} className="text-lg font-bold">{title}</a>
                    //     </Normal>
                    return <div className="relative w-[500px] h-[250px] my-2">
                        <Img className="h-full rounded-lg " imageData={img} />
                        <div className="absolute bottom-0 
                        w-full h-1/2 
                        p-2 rounded-b-lg
                        bg-opacity-50 bg-slate-700 dark:bg-slate-200 
                        backdrop-filter backdrop-blur firefox:bg-opacity-90
                        overflow-hidden overflow-ellipsis
                        ">
                            <Link to={href} className="text-2xl font-bold
                            text-gray-100 dark:text-gray-700
                            ">{title}</Link>
                            <p className="text-sm pb-2
                            text-gray-300 dark:text-gray-500">
                                {excerpt}
                            </p>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default List;