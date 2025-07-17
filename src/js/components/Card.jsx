import React from 'react'

const Card= (props) =>{

    


    return (
        <div className="card my-3" >
          <img src={props.imageUrl} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
          </div>
          <div className= "card-footer">
            <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
          </div>
        </div>
    )
}

export default Card