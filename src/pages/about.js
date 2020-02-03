import React from "react"
import { Link } from "gatsby"

import Layout from "../Components/Layout"
import Head from "../Components/Head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>About Page</h2>
      <p>aspiring web dev from Raleigh, NC</p>
      <p>
        Contact me: <Link to="/contact">Here</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
