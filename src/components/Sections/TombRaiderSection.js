import React from 'react'
import './Sections.css'
import '../../App.css'

export default function TombRaiderSection() {
    return (
        <div className='projectSectionContainer'>
            <div className="projectRow">
                <h1 className='projectTitle'> The Raider of the Tomb </h1>
            </div>
            <p className="MediumSpacing" />
            <div className="projectRow">
                <div className="projectColumn">
                    <p className="projectSubTitle">Completed: May 2020</p>
                    <p className="SmallSpacing">  </p>
                    <p className="SmallSpacing" />    
                    <p className="projectBody"> A randomly-generated dungeon game where players have to 
                        explore the dungeon and defeat the boss. Each time a player the game, the game will automatically 
                        generate the dungeon, different from the last one. This game was created using c# programming 
                        language on Unity Engine. </p>
                </div>
                <div className="projectColumnImg">
                    <p className="SmallSpacing" />
                    <img className="ProjectImage" src="images/Tomb-Raider.jpg" />
                </div>
            </div>
            <p className="SectionSpacing" /> 
        </div>
    )
}