import React from 'react'
import './Sections.css'
import '../../App.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

export default function HomeSection() {
    return (
        <div className='homeSectionContainer'>
            <div className='homeRow'>
                <div className='homeColumn'>
                    <figure className='ProfilePicture'>
                        <img src='images/Profile.jpg' />
                    </figure>
                </div>
                <div className='homeColumn'>
                    <h1 className='homeTitle'>Hello</h1>
                    <p className='homeSubTitle'> I'm Dennis. Nice to meet you!</p>
                    <div className="sectionButton">
                        <Link to='/Resume#Education' >
                            <Button className='resumeButton' buttonStyle='button--Primary' buttonSize='button--Medium'> Resume </Button>
                        </Link>
                        <Link to='/Project#Unix' >
                            <Button className='projectButton' buttonStyle='button--Outline' buttonSize='button--Medium'> Project </Button>
                        </Link>
                    </div>
                    <h2 className='homeSubTitle'>About Me</h2>
                    <p className='homeBody'> 
                    I am a hardworking and ambitious individual who have developed responsible approach to any tasks or situations that I am presented with. 
                    I have strong leadership skill and great teamwork ability, enabling me to interact with a wide range of people. 
                    I have acquired technical knowledge and skills from my courses as well as practical skills from various projects during university years. 
                    I am eager to learn, enjoy overcoming challenges and have great passion for IT industry.
                    </p>
                    <p className='SectionSpacing' />
                </div>
            </div>
        </div>
    );
}