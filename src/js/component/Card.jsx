import React from 'react'


const Card = (props) => {
    return (
        <div  className='card mt-3'>
            <img className="card-img-top img-card" src={props.imgUrl} alt={`Img de ${props.imagenAlt}`} />
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.text}</p>
                <a className='btn btn-primary'>{props.button}</a>
            </div>
        </div>
    )
}

export default Card