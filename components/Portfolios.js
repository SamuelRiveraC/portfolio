import React from "react"
import Link from 'next/link'
import Image from 'next/image'


export default function Portfolios(props) {

  return (
  <div className="container" >
    <div className="row portfolio" >
      <div className="col-12" >
        <h2>   Portfolio   </h2>
      </div>

      { props.portfolios.map((item,index) => {
        return <div key={index} className="col-12 col-sm-6 col-md-4">
          <Link key={index} href={`/portfolio/${item.slug}`}>
            <a>
            <div className="portfolio__item" >
              <div className="portfolio__preview">
                <div className="portfolio__img__container">
                  <Image className="portfolio__img" height="360" width="320" src={'/portfolio/'+item.data.thumbnail} alt={item.data.title} />
                </div>
              </div>
            </div>
            </a>
          </Link>
        </div>
        }) 
      }

    </div>
  </div>
  )
}