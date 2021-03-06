import React from "react"
import Fade from 'react-reveal/Fade';

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Hero from "../components/Hero"
import WhatIDo from "../components/WhatIDo"
import Experience from "../components/Experience"
import Portfolios from "../components/Portfolios"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'


const IndexPage = ({portfolios}) => (
  <Layout> <SEO title="Home" />

    <Fade bottom>
      <Hero />
      <hr className="separator"/>
    </Fade>

    <Fade bottom>
      <WhatIDo />
      <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Experience/>
      <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Portfolios portfolios={portfolios}/>
      <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Testimonials/>
      <div className="separator"/>
    </Fade>

    <Fade bottom>
      <Footer />
    </Fade>

  </Layout>
)

export default IndexPage

//REFACTOR CREATE HELPER FUNCTION ON NEW FOLDER TO ENSURE DRY
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), '_portfolio')
  const filenames = await fs.readdir(postsDirectory)
  let portfolios = await Promise.all( filenames.map(async (filename) => {
    if (filename.split(".").pop() == "md") {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')
      const { data, content } = matter(fileContents) // await remark().use(html).process(fileContents)
      return {
        filename,
        slug: filename.split(".")[0],
        content: content,
        data: data,
      }
    }
  })
  )
  portfolios = portfolios.filter( item => { return item!==undefined; })
  portfolios = portfolios.sort( (a,b) => new Date(a.data.date)-new Date(b.data.date) )
  return {
    props: {
      portfolios: portfolios
    },
  }
}