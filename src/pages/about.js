import React from "react"
import { Link } from "gatsby"

import Layout from "../Components/global/Layout"
import Head from "../Components/global/Head"
import About from "../Components/about/About"
import Contact from "../Components/about/Contact"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <About />
      <Contact />
    </Layout>
  )
}

export default AboutPage
