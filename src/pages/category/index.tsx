import React from "react"
import tw from "tailwind-styled-components"
import PageContainer from "../../components/page-container"

const Container = tw.div`
    flex
    flex-row
`

const PicScorll = () => {
    return <div className="w-40 h-screen absolute left-0 bg-blue-500 border-2 border-black">

    </div>
}

const Category: React.FC<{
    name: string,
    description: string,
}> = ({ name, description }) => {
    return <div className="flex h-screen justify-center items-center border-2 border-black">
        <p className="text-5xl font-extrabold">
            {name}
        </p>
    </div>
}

const List = () => {
    return <div>
        <h1 >List</h1>
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