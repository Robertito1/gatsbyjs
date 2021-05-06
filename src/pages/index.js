import React from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo />
    <Home />
    <Skills />
    <Projects />
  </Layout>
)

export default IndexPage
