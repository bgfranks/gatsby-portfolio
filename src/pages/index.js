import React from "react"
import { Link } from "gatsby"

import Layout from "../Components/global/Layout"
import Head from "../Components/global/Head"
import CTA from "../Components/home/CTA"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <CTA />
    </Layout>
  )
}

export default IndexPage
