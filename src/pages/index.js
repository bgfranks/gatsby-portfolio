import React from "react"
import { Link } from "gatsby"

import Layout from "../Components/Layout"
import Head from "../Components/Head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Howdy :)</h1>
      <p>
        learn my story! <Link to="/about">About Me</Link>
      </p>
      <p>
        Need a dev? <a href="/contact">Contact Me</a>
      </p>
      <p>
        Need a dev? <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
