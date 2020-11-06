import * as React from 'react';
import {PageProps, Link, graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {useEffect, useState} from "react";

interface articleProps {
    uid: string,
}

const article: React.FC<articleProps> = ({uid}) => {
    const [content, setContent] = useState('');

    useEffect(() => {
    }, []);

    return (
        <Layout>
            <SEO title='fuck'/>
            <article>
                fuck
            </article>
        </Layout>
    )
}

export default article;

