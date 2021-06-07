import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Navigation.css'

class Navigation extends Component {
    state = { clicked: false }
    
    handleClick = () => { 
        this.setState ({ clicked: !this.state.clicked }) 
    }

    render()
    {
        return(
            <nav className='navItems'>
                <h1 className='navLogo'> Dennis </h1>
                <div className='navMenuIcon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.clicked ? 'navMenu active' : 'navMenu'}>
                    {MenuItems.map((item, index) => 
                    {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}> 
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navigation