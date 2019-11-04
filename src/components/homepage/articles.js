import React from 'react'
import { Link, graphql, StaticQuery } from "gatsby"
import ArticleList from '../articleList';

const MyLastArticles = props => {
    return (
        <div>
            <article className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">Mes dernières publications</h1>
                <ArticleList limit={props.limit}/>
                <Link to="/blog" className="underline font-bold mt-2">Voir tous les articles</Link>
            </article>
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
          }`
        }
        render={data => <MyLastArticles data={data} {...props} />}
    />
)
