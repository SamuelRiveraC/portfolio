import React from "react"
import Link from 'next/link'

export default function CTA () {
    const executeScrollToContact = () => {
      document.getElementById('contact-me').scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <button className="primary" onClick={() => executeScrollToContact()}> Contact Me </button> 
    )
}