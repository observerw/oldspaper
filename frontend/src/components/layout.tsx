import * as React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Header from './Header';

export default ({children}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
            <Header title={data.site.siteMetadata?.title || `Title`}/>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>{children}</main>
                <footer style={{marginTop: `2rem`}}>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                </footer>
            </div>
        </>
    )
}