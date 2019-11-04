import React from 'react'
import Layout from '../components/layout'
import ArticleList from '../components/articleList'

export default () => {
    return (
        <Layout>
            <div className="container mx-auto">
                <article className="px-4">
                    <h1 className="text-4xl font-bold mb-6">Mes publications</h1>
                    <ArticleList />
                </article>
            </div>
        </Layout>
    )
}