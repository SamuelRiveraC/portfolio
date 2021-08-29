import React from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import fs from 'fs'
import { promises } from 'fs'
import path from 'path'
import matter from 'gray-matter'

import {remark} from 'remark'
import remarkHtml from 'remark-html'


const PortfolioPostTemplate = ({  post, morePosts, preview }) => {

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const previous = "", next = ""

  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />

      <article className="container p-0 portfolio_article">
        <div className="row justify-content-center">

          <div className="col-12">
            <h1 className="my-5 text-center">
              {post.title}
            </h1>
          </div>

          <div className="col-12 col-md-4">
            <div className="row">

              {post.role !== "" && <div className="col-12">
                <p><b> My Role </b></p>
                <p>{post.role}</p>
              </div>}

              {post.client !== "" && <div className="col-12">
                <p><b> The Client </b></p>
                <p>{post.client}</p>
              </div>}

              {post.dateProject !== "" && <div className="col-12">
                <p><b> Date </b></p>
                <p>{post.dateProject}</p>
              </div>}

              {post.location !== "" && <div className="col-12">
                <p><b> Location </b></p>
                <p>{post.location}</p>
              </div>}

              {post.website !== "" && <div className="col-12">
                <a href={post.website} target="_blank"> 
                  <button className="outline"> 
                    See it live 
                  </button> 
                </a>
              </div>}

              {post.repository !== "" && <div className="col-12">
                <p><b><a href={post.repository}> Check the repository </a></b></p>
              </div>}

            </div>
          </div>

          {post.description !== "" && <div className="col-12 col-md-8">
            <section dangerouslySetInnerHTML={{ __html: post.description }} />
          </div> }

          {post.html !== "" && <div className="col-12 col-md-12 mt-3 text-center ">
            <section className="portfolio_container" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div> }


          {post.testimonial !== "" && <div className="col-12 col-sm-10 col-md-8 mt-3 card text-center">
            <h6>Client testimonial</h6>
            <section dangerouslySetInnerHTML={{ __html: post.testimonial }} />
            <br />
            <small><b> {post.testimonialAuthor} </b></small>
            <small>{post.testimonialRole}</small>  
          </div> }

        </div>

        <hr />

      </article>

      

      <div className="container mt-5"> 
        <div className="row">
          <div className="col-12 text-center">
            <Link href={'/portfolio'}>
              <a> <h4>Click here to check more projects</h4> </a>
            </Link>
          </div>
        </div>
      </div>
      
    </Layout>
  )
} 
export default PortfolioPostTemplate

export async function getStaticProps({ params }) {

  const fullPath = path.join(process.cwd(), `_portfolio/${params.slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  let result   = await remark().use(remarkHtml ).process(content)
  result =  result.toString()

  return {
    props: {
      post: {
        filename: `_portfolio/${params.slug}.md`,
        slug: params.slug,
        content: result,
        ...data
      },
    },
  }
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), '_portfolio')
  const slugs = await promises.readdir(postsDirectory)

  // return { paths: [], fallback: false }
  
  const portfolios = slugs.map( (slug) => slug = slug.split(".")[0] )

  return {
    paths: portfolios.map((portfolio) => {
      return {
        params: {
          slug: portfolio,
        },
      }
    }),
    fallback: false,
  }

}
