import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../Components/Layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <Layout>
      <h2>My Blog</h2>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <h2>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
