import React from 'react'
import { Link, graphql, StaticQuery } from "gatsby"

const ArticlesList = props => {
    let postList = props.data.allMarkdownRemark.edges;
    if (props.limit) {
        postList = postList.slice(0, props.limit);
    }

    postList = postList.map(({ node }, index) => {
        const options = { year: "numeric", month: "short"}
        const dateparsed = new Date(node.frontmatter.date)
        const toDisplay = dateparsed.toLocaleDateString("fr-FR", options)

        return (
            <article key={index} className="flex justify-between mb-6 items-baseline">
                <Link to={node.fields.slug} className="text-2xl pr-6 font-medium">
                    {node.frontmatter.title}
                </Link>
                <span className="text-gray-700 whitespace-no-wrap">{toDisplay}</span>
            </article>
        )
    });

    return (
        <div>
            {postList}
        </div>
    )
};

export default props => (
    <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
              edges {
                node {
                  frontmatter {
                    date
                    title
                  }
                  fields {
                    slug
                  }
                  html
                  excerpt
                }
              }
            }
          }`
        }
        render={data => <ArticlesList data={data} {...props} />}
    />
)
