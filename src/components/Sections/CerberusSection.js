import React from 'react'
import './Sections.css'
import '../../App.css'

export default function CerberusSection() {
    return (
        <div className='projectSectionContainer'>
            <div className="projectRow">
                <h1 className='projectTitle'> Codename Cerberus </h1>
            </div>
            <p className="MediumSpacing" />
            <div className="projectRow">
                <div className="projectColumn">
                    <p className="projectSubTitle">Completed: June 2019</p>
                    <p className="SmallSpacing" />
                    <p className="projectBody"> A First-Person Shooter game where players have to complete missions during an invasion. 
                    The game comes with two game modes, campaign and survival. Campaign game mode requires players to complete a series
                     of missions, while survival game mode requires players to complete missions with limited weapon ammunitions and time.</p>
                </div>
                <div className="projectColumnImg">
                    <p className="SmallSpacing" />
                    <img className="ProjectImage" src="images/CodenameCerberus.jpg" />
                </div>
            </div>
            <p className="SectionSpacing" /> 
        </div>
    )
}