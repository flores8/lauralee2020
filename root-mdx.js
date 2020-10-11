import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Blockquotes, PrismSetup } from "./src/components/blog"

const components = {
  blockquote: Blockquotes,
  pre: PrismSetup,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
