import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerSytles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerSytles.footer}>
      <p>Created {data.site.siteMetadata.author} ©2020</p>
    </footer>
  )
}

export default Footer
