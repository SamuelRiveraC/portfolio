import React from "react"
import CV from "../components/cv"
import CTA from "../components/cta"
import Skills from "../content/skills.json"

               

export default class WhatIDo extends React.Component {
  render () { return (
  <div className="container" >
    <div className="row align-items-center" >
      <div className="col-12 text-center" >
        <h2> What I can offer to you </h2>
      </div>
	    <div className="col-12 col-md-6" >
	   		<div className="card" >
          <div className="row">
            <div className="col-12"> 
	   		      <h3> Hard Skills </h3>
	   		      <p>
                I am a Computer Systems Engineer specialized in front-end web development with experience in diverse and modern backend and frontend technologies. This is the full list of the technologies I have learned for now:
              </p>
            </div>
          </div>
          <div className="row"> 
            <div className="badge text-left mt-3 mb-1">Back end</div>
          </div>
          <div className="row backend"> 
            {Skills.back.map((data, index) => {
              return <div className="badge" key={index}> 
                <img alt="" src={"https://img.shields.io/badge/-"+data.skill+"-"+data.color+"?style=flat-square&logo="+data.logo+"&logoColor=white"} />
              </div>
            })}
          </div>
          <br/>
          <div className="row"> 
            <div className="badge text-left mt-3 mb-1">Front end</div>
          </div>
          <div className="row front"> 
            {Skills.front.map((data, index) => {
              return <div className="badge" key={index}> 
                <img alt="" src={"https://img.shields.io/badge/-"+data.skill+"-"+data.color+"?style=flat-square&logo="+data.logo+"&logoColor=white"} />
              </div>
            })}
          </div>
          <br/>
          <div className="row"> 
            <div className="badge text-left mt-3 mb-1">Databases and related techs</div>
          </div>
          <div className="row db"> 
            {Skills.db.map((data, index) => {
              return <div className="badge" key={index}> 
                <img alt="" src={"https://img.shields.io/badge/-"+data.skill+"-"+data.color+"?style=flat-square&logo="+data.logo+"&logoColor=white"} />
              </div>
            })}
          </div>
	    	</div>
	    </div>

	    <div className="col-12 col-md-6" >
	    	<div className="card" >
          <div className="row"> 
            <div className="col-12"> 
	    	      <h3> Soft Skills </h3>
    		      <p>
                I’ve been working remotely with small businesses around the US, Europe, and South America. Since I’ve mostly worked remotely, I had to learn how to manage my own time and projects, I also learned about digital marketing, branding, customer service, and how to sell myself, which I leverage in my development process to guarantee that the application delivers not only the functionalities but appeals the users as well. This is a list of tools I often use in my workflow:
              </p>
              <p>
                This is a list of tools I often use in my workflow:
              </p>
            </div>
          </div>
          <div className="row tools"> 
            {Skills.tools.map((data, index) => {
              return <div className="badge" key={index}> 
                <img alt="" src={"https://img.shields.io/badge/-"+data.skill+"-"+data.color+"?style=flat-square&logo="+data.logo+"&logoColor=white"} />
              </div>
            })}
          </div>
        </div>

	    	<div className="w100 text-center">
          <CTA />
          <CV  />
	    	</div>
	    </div>

    </div>
  </div>
  ) }
}