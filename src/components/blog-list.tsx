import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

interface IEdge {
    node: {
        id: string,
        excerpt: string,
        frontmatter: {
            title?: string,
            date?: string,
            author?: string,
            category?: string,
        }
    }
}

const Basic = tw.div`
    rounded-block my-2 p-4 bg-opacity-70 backdrop-filter backdrop-blur
`

const Main = tw(Basic)`
    rounded-block my-2 p-4 w-[500px] h-[150px] border-b-8  border-blue-500/50 
`

const Normal = tw(Basic)`
    rounded-block flex flex-col justify-center my-2 w-[400px] h-[100px]
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
                buffer.map(({
                    node: {
                        id,
                        excerpt,
                        frontmatter: {
                            title,
                            date,
                            author,
                            category,
                        }
                    }
                }, index) => {
                    const href = `${category}/${title}`
                    return index === Math.floor(BUFFER_SIZE / 2) ?
                        <Main>
                            <a href={href} className="text-3xl font-bold">{title}</a>
                            <p className="text-sm text-gray-500 w-1/2 h-auto mt-5 overflow-hidden overflow-ellipsis whitespace-nowrap">{excerpt}</p>
                        </Main>
                        :
                        <Normal>
                            <a href={href} className="text-lg font-bold">{title}</a>
                        </Normal>
                })
            }
        </div>
    );
};

export default List;