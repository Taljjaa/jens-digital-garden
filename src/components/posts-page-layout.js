import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import CodeBlock from "../components/CodeBlock"

const components = {
  code: CodeBlock,
  wrapper: props => (
    <div>
      <main {...props} />
    </div>
  ),
}

const PageTemplate = ({ data: { mdx } }) => {
  return (
    <Layout>
      <div className="markdown flex flex-col items-center">
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider components={components}>
          <MDXRenderer className="flex flex-col items-center">
            {mdx.body}
          </MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default PageTemplate
