import React from "react";
import tw from "tailwind-styled-components";
import Footer from "./footer"
const Container = tw.div`
    mx-auto
    flex
    flex-col
    items-center
    min-h-screen
    justify-between
    bg-slate-100
    dark:bg-slate-700
`

const PageContainer: React.FC<{}> = ({ children }) => {
    return <Container>
        {children}
        <Footer />
    </Container>
}

export default PageContainer;