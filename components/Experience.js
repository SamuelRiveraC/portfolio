import React from "react"
import ExperiencesJSON from "../content/experiences.json"

export default class Experience extends React.Component {
  render () { return (
    <div className="container">
      <div className="row justify-content-center" >
        <div className="col-12 text-center" >
          <h2> Portfolio </h2>
        </div>

        {ExperiencesJSON.map((data, index) => {
          return <div key={index} className="col-12 col-sm-12 col-md-8">
            <div className="row">
              <div className="col-2 col-sm-3 text-center">
                <div className="row align-items-center" style={{height:"100%"}}>
                  <div className="experience_circle" style={{borderColor: data.color}}>
                    {index+1}
                  </div>
                </div>
              </div>
              <div className="col-10 col-sm-9">
                <h3> {data.title} </h3>
                <p>  {data.content} </p>
              </div>
            </div>
          </div>
        })}
  
      </div>
    </div>
  ) }
}






