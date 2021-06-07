import React from 'react'
import './Cards.css'
import CardItems from './CardItems'

function Cards() {
    return (
        <div className="cards">
            <h1> My Project</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems src="images/ProjectOS.png" 
                            text='Unix File System Design'
                            label='May 2021' 
                            path='/Unix' />
                        <CardItems src="images/ShopCut2.jpg" 
                            text='ShopCUT e-Commerce Application'
                            label='Dec 2020' 
                            path='/ShopCUT' />
                    </ul>
                    <ul className="cards__items">
                        <CardItems src="images/Tomb-Raider.jpg" 
                            text='The Raider of the Tomb'
                            label='May 2020' 
                            path='/TombRaider' />
                        <CardItems src="images/Dompetku.jpg" 
                            text='Dompetku: The Budgeting App'
                            label='Dec 2019' 
                            path='/Dompetku' />
                        <CardItems src="images/CodenameCerberus.jpg" 
                            text='Codename Cerberus'
                            label='Jun 2019' 
                            path='/Cerberus' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
