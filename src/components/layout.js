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
        <div className="w-full flex items-baseline justify-between container mx-auto lg:max-w-3xl px-4">
          <ul className="flex">
            <li className="mr-6">
              <Link to={`/commencer-ici`} className="uppercase font-bold text-indigo-700 hover:text-indigo-800 hover:underline tracking-wider">
                Commencer ici
              </Link>
            </li>
            <li>
              <Link to={`/`} className="uppercase font-bold tracking-wider text-gray-700 hover:text-gray-800 hover:underline">
                  Blog
              </Link>
            </li>
          </ul>
          <p className="text-2xl">
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

          </p>
        </div>
      </header>

      <main className="container mx-auto lg:max-w-3xl px-4 mt-2 mb-32">
        {children}
      </main>
    </div>
  )
}
