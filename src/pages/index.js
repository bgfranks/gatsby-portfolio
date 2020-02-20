import React from "react"
import { Link } from "gatsby"

import Layout from "../Components/global/Layout"
import Head from "../Components/global/Head"
import CTA from "../Components/home/CTA"
import Skills from "../Components/home/Skills"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <CTA />
      <Skills />
    </Layout>
  )
}

export default IndexPage
