import React from 'react'

const Jumbotron= (props) =>{
    return (
        <div className="card text-start bg-light">
            <div className="card-body">
                <h1 className="card-title display-1">{props.title}</h1>
                <p className="card-text">{props.text}</p>
                <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
      </div>
    
    )
}

export default Jumbotron