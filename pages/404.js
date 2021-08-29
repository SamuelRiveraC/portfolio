import React from "react"
import Link from 'next/link'
import Layout from "../components/Layout"
import Image from 'next/image'
import ObiWan from "../images/obi-wan.jpg"


const NotFoundPage = () => (
  <Layout>
    <div className="container" />
			<div className="row align-items-center" style={{height:"100vh"}}>  	
				<div className="col-12 text-center">  	
  					<h1>404 NOT FOUND</h1> 
  					<Image src={ObiWan} alt="404" />
  					<br />
  					<h3>These aren&apos;t the links you are looking for.</h3>
  					<p>Lucky for you I have some links that you may be interested on :)</p>
						<br />
  		      <Link className="mb-3" href="/" >
  		        Return to my landing page website
  		      </Link><br /><br />
  		      <Link className="mb-3" href="/portfolio/">
  		        Look my Work and how my experience can help you
  		      </Link><br /><br />
  		      <a className="mb-3" target="_blank" href="/samuel-rivera-cv.pdf">
  		        Or... maybe are you looking for my CV, here it is for you
  		      </a><br /><br />
				</div>  	
			</div>  	
    <div className="separatr" />
  </Layout>
)

export default NotFoundPage
