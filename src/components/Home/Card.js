import React from 'react'
import './Card.css'

const Card = ({ title, imageUrl, body }) => {
    return (
        <section className='card-container'>
            <section className='image-container'>
                <img src={imageUrl} alt='' />
            </section>
            <section className='card-content'>
                <section className='card-title'>
                    <h3>{title}</h3>
                </section>
                <section className='card-body'>
                    <p>{body}</p>
                </section>
            </section>
            <section className='btn'>
                <button><a href='/article'>View More</a></button>
            </section>
         </section>
    )
}

export default Card