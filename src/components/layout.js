import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            links {
              twitter
              youtube
              github
              devletter
            }
          }
        }
      }
    `
  );

  return (
    <div className="bg-white antialiased border-t-4 border-blue-600">
      <Helmet htmlAttributes={{"lang": "fr"}}>
        <meta charSet="utf-8" />
        <meta name="description" content={data.site.siteMetadata.title} />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <Header/>
        {children}
      <Footer links={data.site.siteMetadata.links}/>
    </div>
  )
}
