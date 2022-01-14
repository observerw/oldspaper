import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import Footer from "./footer"
import Header from "./header"
const Container = tw.div`
    mx-auto
    mt-10
    flex
    flex-col
    h-full
`

const PageContainer: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        if (localStorage?.darkMode === 'true') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return <Container>
        <Header />
        <div className="flex-grow">
            {children}
        </div>
        <Footer />
    </Container>
}

export default PageContainer;