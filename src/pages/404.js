import React from "react"
import { Link } from "gatsby"

import Layout from "../Components/Layout"
import Head from "../Components/Head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h2>404: Page Not Found</h2>
      <p>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
