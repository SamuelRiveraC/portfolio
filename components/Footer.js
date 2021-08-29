import React from "react"
import Contact from "../components/contact"
import CV from "../components/cv"

export default function Footer (){
	return (
    <div className="container">
		<div className="row">
    	    <div className="col-12 col-md-6">
    	    	<h2 >About Me</h2>
    	    	<p>I started my journey installing mods on my videogames and tweaking them on Notepad. At college I went to a coding course, where I discovered my passion for creating solutions to problems through code. I graduated in Computer Systems engineering specialized in web applications. As I mostly worked freelance and remotely I had to learn how to manage my own time and projects, learn about digital marketing, branding, sales, and customer service, which apply daily as a Developer creating efficient, good looking Interfaces and with high usability for users.</p>
    	    	<CV/>
    	    </div>
    	    <div className="col-12 col-md-6">
    	    	<h2 >Contact Me</h2>
    	    	<p>I always love a new challenge, let’s work together, contact me and I will answer you as soon as possible!</p>
    	    	<Contact/>
    	    	<p>You can also email me at <a href="mailto:samuerivera64@gmail.com"> samuerivera64@gmail.com </a> and connect with me on <a href="https://www.linkedin.com/in/samuelriverac/"> LinkedIn </a></p>
    	    </div>
        </div>
    </div>
    )
}