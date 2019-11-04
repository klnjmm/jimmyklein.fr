import React from "react"
import Layout from "../components/layout"
import Hero from '../components/homepage/hero'
import MyProject from '../components/homepage/my-projects'
import Articles from '../components/homepage/articles'

export default () => {
  return (
    <Layout>
        <Hero/>
        <MyProject/>
        <Articles limit={5} />
    </Layout>
  )
}

