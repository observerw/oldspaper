import React from "react";
import tw from "tailwind-styled-components";
import Footer from "./footer"
const Container = tw.div`
    mx-auto
    px-5
    flex
    flex-col
    items-center
    h-screen
    justify-between
    bg-slate-100
`

const PageContainer: React.FC<{}> = ({ children }) => {
    return <Container>
        {children}
        <Footer />
    </Container>
}

export default PageContainer;