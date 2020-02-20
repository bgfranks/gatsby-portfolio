import React from "react"

import Layout from "../Components/global/Layout"
import Head from "../Components/global/Head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact Page</h2>
      <p>Email: bgfranks106@icloud.com</p>
      <p>
        Twitter:{" "}
        <a href="https://twitter.com/Bgfranks_" target="_blank">
          Bgfranks_
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
