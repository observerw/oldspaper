import React, { useEffect, useState } from 'react';
// import '../styles/index.css';
import PageContainer from "../components/page-container"
import DarkModeSwitch from '../components/darkmode-switch';
import BlogList from "../components/blog-list"
import Welcome from '../components/welcome';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

export default ({ data }) => {

  const { allMarkdownRemark: { edges } } = data;
  console.log(edges);


  const welcome = Object.values(Welcome)[Math.floor(Math.random() * Object.values(Welcome).length)];


  return <PageContainer>
    <Helmet>
      <title>oldspaper</title>
    </Helmet>
    <div className="w-full h-screen flex flex-col justify-center lg:flex-row">
      <div className="center-container h-auto">
        {welcome()}
      </div>
      <div className="center-container h-auto flex-col dark:text-white">
        <BlogList edges={edges} />
      </div>
    </div>
  </PageContainer>
}

export const pageQuery = graphql`
query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            auther
            category
            date
            img {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            slug
          }
        }
      }
    }
  }
  
`

// function Index() {
//     const [date, setDate] = useState(null);
//     useEffect(() => {
//         async function getDate() {
//             const res = await fetch('/api/date');
//             const newDate = await res.text();
//             setDate(newDate);
//         }
//         getDate();
//     }, []);
//     return (
//         <main>
//             <Helmet>
//                 <title>Gatsby + Node.js (TypeScript) API</title>
//             </Helmet>
//             <h1>Gatsby + Node.js (TypeScript) API</h1>
//             <h2>
//                 Deployed with{' '}
//                 <a
//                     href="https://vercel.com/docs"
//                     target="_blank"
//                     rel="noreferrer noopener"
//                 >
//                     Vercel
//                 </a>
//                 !
//             </h2>
//             <p className=''>
//                 <a
//                     href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
//                     target="_blank"
//                     rel="noreferrer noopener"
//                 >
//                     This project
//                 </a>{' '}
//                 is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
//                 directories, <code>/src</code> for static content and <code>/api</code>{' '}
//                 which contains a serverless{' '}
//                 <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
//                 <a href="/api/date">
//                     <code>api/date</code> for the Date API with Node.js (TypeScript)
//                 </a>
//                 .
//             </p>
//             <br />
//             <h2>The date according to Node.js (TypeScript) is:</h2>
//             <p>{date ? date : 'Loading date...'}</p>
//         </main>
//     );
// }

// export default Index;

