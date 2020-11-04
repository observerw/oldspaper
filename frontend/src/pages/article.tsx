import React, { useCallback } from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface articleProps {
    uid: string,
}

const article: React.FC<articleProps> = ({ uid }) => {
    return (
        <Layout>
            <SEO title='fuck' />
            <article>
                fuck
            </article>
        </Layout>
    )
}

export default article;

