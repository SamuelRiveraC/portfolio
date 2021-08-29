import React from "react"
import Fade from 'react-reveal/Fade';

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Portfolios from "../components/Portfolios"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const PortfolioPage = ({portfolios}) => (
  <Layout> <SEO title="Portfolio" />

    <Fade bottom>
    	<div className="container">
    		<div className="row">
	    		<div className="col-12 text-center mt-5">
          			<h1> My portfolio </h1>
        		</div>
    		  </div>
		    </div>
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

export default PortfolioPage


//REFACTOR CREATE HELPER FUNCTION ON NEW FOLDER TO ENSURE DRY
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), '_portfolio')
  const filenames = await fs.readdir(postsDirectory)
  let portfolios = await Promise.all( filenames.map(async (filename) => {
    if (filename.split(".").pop() == "md") {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')
      const { data, content } = matter(fileContents) 
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