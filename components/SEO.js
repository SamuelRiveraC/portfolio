/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Head from 'next/head'

import config from '../next.config'

function SEO() {
  const metaTitle = config.title 
  const metaDescription = config.description 
  const metaAuthor = config.author 

  return (
    <Head>
      <title>{metaTitle}</title>
        <link rel="icon" href="/SRC-Logo.png" />

        <meta property="description"         content={metaDescription} key="title" />
        <meta property="og:title"            content={metaTitle}       key="title" />
        <meta property="og:description"      content={metaDescription} key="title" />
        <meta property="og:type"             content="website"         key="title" />
        <meta property="twitter:card"        content="summary"         key="title" />
        <meta property="twitter:creator"     content={metaAuthor}      key="title" />
        <meta property="twitter:title"       content={metaTitle}       key="title" />
        <meta property="twitter:description" content={metaDescription} key="title" />


    </Head>
  )
}
export default SEO
