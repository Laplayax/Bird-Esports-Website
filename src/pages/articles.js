import React, { Component } from "react"
import SEO from "../components/seo"
import Featured from "../components/featured"
import ArticlesList from "../components/articles"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Footer from "../components/footer"

import BG from "../images/bg.png"
import "./articles.css"

class Articles extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Articles" description="Description of the TBE TEAM" />
        <img className="body_bg_img" src={BG} />
        <Nav />
        <Featured />
        <ArticlesList />
        <Footer />
      </Layout>
    )
  }
}

export default Articles
