import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  const postList = data.allMarkdownRemark.edges.map(({ node }, index) => {
    let cover = null;
    /*if (node.frontmatter.cover) {
            cover = <Img className="h-64 rounded-t-lg" sizes={node.frontmatter.cover.childImageSharp.sizes} />
        }*/

    const options = { year: "numeric", month: "long", day: "numeric" }
    const dateparsed = new Date(node.frontmatter.date)
    const toDisplay = dateparsed.toLocaleDateString("fr-FR", options)

    return (
      <div key={index}>
        <div>
          {cover}
          <div className="py-2 pb-4">
            <Link to={node.fields.slug} className="hover:underline">
              <p className="text-xl font-bold text-gray-900 leading-tight mb-2">
                {node.frontmatter.title}
                <span className="text-gray-600 text-sm font-normal">
                  {" "}
                  - {toDisplay}
                </span>
              </p>
            </Link>

            <p className="text-gray-700 pb-2">{node.excerpt}</p>
            <Link
              to={node.fields.slug}
              className="text-gray-600 text-sm hover:underline"
            >
              Lire l'article
            </Link>
          </div>
        </div>
      </div>
    )
  })

  return (
    <Layout>
      <div className="flex items-center container mx-auto lg:max-w-3xl py-4">
        <div className="flex flex-shrink-0">
          <p className="flex">
            <img
                src='/avatar.jpg'
                alt="Jimmy Klein"
                title="Jimmy Klein"

                className="rounded-full h-10 w-10"
            />
          </p>
        </div>
        <div className="px-4">
          <p className="text-2xl text-black font-bold">
              Jimmy Klein
          </p>
        </div>
      </div>
      <div>{postList}</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            date
            title
            cover {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`
