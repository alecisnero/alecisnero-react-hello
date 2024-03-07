import React from 'react'

const Card = (props) => {
    return (
        <div  className='card'>
            <img src="" alt="" />
            <div>
                <h5 className='card'>{props.title}</h5>
                <p className='card'>{props.text}</p>
                <a className='card'>{props.button}</a>
            </div>
        </div>
    )
}

export default Card