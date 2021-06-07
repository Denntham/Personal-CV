import React from 'react'
import { Link } from 'react-router-dom'


function CardItems(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__itemlink" to={props.path}>
                    <figure className="cards__itempicture" data-category={props.label}>
                        <img src={props.src} alt='Unix Image' className="cards__itemimage" />
                    </figure>
                    <div className="cards__iteminfo">
                        <h5 className="cards__itemtext">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItems
