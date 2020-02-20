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
      <div>
        <a
          href="http://github.com/bgfranks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://twitter.com/Bgfranks_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.facebook.com/brandon.franks.52"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/gingerkidbrandon/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
