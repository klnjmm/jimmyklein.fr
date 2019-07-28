import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { FaTwitter, FaYoutube, FaGithub } from "react-icons/fa"
import { Helmet } from "react-helmet";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            socials {
              twitter
              youtube
              github
            }
          }
        }
      }
    `
  )

  return (
    <div className="bg-white antialiased">
      <Helmet htmlAttributes={{"lang": "fr"}}>
        <meta charSet="utf-8" />
        <meta name="description" content={data.site.siteMetadata.title} />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <header className="bg-gray-200 py-4">
        <div className="flex items-center container mx-auto px-4">
          <div className="flex flex-shrink-0">
            <Link to={`/`} className="flex">
              <img
                src='/avatar.jpg'
                alt={data.site.siteMetadata.title}
                title={data.site.siteMetadata.title}
                className="rounded-full h-10 w-10"
              />
            </Link>
          </div>
          <div className="px-4">
            <Link to={`/`} className="text-2xl text-black font-bold">
              {data.site.siteMetadata.title}
            </Link>
            <span className="px-4 text-2xl">
              <a
                href={data.site.siteMetadata.socials.twitter}
                title="Twitter @frjimmyklein"
                className="text-gray-500 px-1 hover:text-gray-800"
              >
                <FaTwitter className="inline" />
              </a>
              <a
                href={data.site.siteMetadata.socials.youtube}
                title="Youtube Jimmy Klein"
                className="text-gray-500 px-1 hover:text-gray-800"
              >
                <FaYoutube className="inline" />
              </a>
              <a
                  href={data.site.siteMetadata.socials.github}
                  title="Github Jimmy Klein"
                  className="text-gray-500 px-1 hover:text-gray-800"
              >
                <FaGithub className="inline" />
              </a>
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-2">{children}</main>
    </div>
  )
}
