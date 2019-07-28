import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { FaArrowLeft, FaArrowRight, FaHome } from "react-icons/fa"
import Layout from "../components/layout"
import { Helmet } from "react-helmet";

export default class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    const options = { year: "numeric", month: "long", day: "numeric" }
    const dateparsed = new Date(post.frontmatter.date)
    const toDisplay = dateparsed.toLocaleDateString("fr-FR", options)

    let previousLink = null
    if (previous) {
      previousLink = (
        <Link
          to={previous.fields.slug}
          className="text-xl float-left font-bold hover:underline flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Précedent
        </Link>
      )
    }

    let nextLink = null
    if (next) {
      nextLink = (
        <Link
          to={next.fields.slug}
          className="text-xl float-right font-bold hover:underline flex items-center"
        >
          Suivant <FaArrowRight className="ml-2" />
        </Link>
      )
    }

    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8"/>
          <meta name="description" content={post.excerpt} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={post.frontmatter.title} />
          <meta name="twitter:description" content={post.excerpt} />
          <title>{post.frontmatter.title}</title>
        </Helmet>

        <Link
          to={"/"}
          className="hover:underline flex items-center text-gray-500 text-base mb-4"
        >
          <FaHome className="mr-2" />
          Retour à l'accueil
        </Link>
        <div className="post">
          <p className="text-3xl font-bold text-gray-900 leading-none ">
            {post.frontmatter.title}
          </p>
          <p className="text-gray-600 text-sm mb-4">{toDisplay}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </div>
        <div className="mb-6 pb-32">
          {previousLink}
          {nextLink}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
      }
    }
  }
`
