import React from "react"
import tw from "tailwind-styled-components"
import PageContainer from "../../components/page-container"
import rust from "../../static/pics/rust.jpg"
import { Tab } from '@headlessui/react';

const Container = tw.div`
    w-full grid grid-cols-4
`

const PicCell = () => {
    return <div className="w-full">
        <img src={rust} alt="rust" />
    </div>
}

const PicScorll = () => {
    return <div className="bg-gray-200 shadow-xl">
        <PicCell />
    </div>
}

const Category: React.FC<{
    name: string,
    description: string,
}> = ({ name, description }) => {
    return <div className="flex h-full justify-center items-center border-2 border-gray-200">
        <p className="text-5xl font-extrabold">
            {name}
        </p>
    </div>
}

const ListItem: React.FC<{
    title: string,
    meta?: string,
    summary?: string,
}> = () => {
    return <div className="w-auto h-32 shadow-lg rounded-lg">

    </div>
}

const List = () => {
    return <div className="flex justify-center items-center col-span-2 border-2 border-gray-200">

    </div>
}


export default () => {
    return <PageContainer>
        <Container>
            <PicScorll />
            <Category name="测试" description="这是一个测试" />
            <List />
        </Container>
    </PageContainer>
}

() => {

}