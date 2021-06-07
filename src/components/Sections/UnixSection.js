import React from 'react'
import './Sections.css'
import '../../App.css'

export default function UnixSection() {
    return (
        <div className='projectSectionContainer'>
            <div className="projectRow">
                <h1 className='projectTitle'> Unix File System </h1>
            </div>
            <p className="MediumSpacing" />
            <div className="projectRow">
                <div className="projectColumn">
                    <p className="projectSubTitle">Completed: May 2021</p>
                    <p className="SmallSpacing" />
                    <p className="projectBody"> A project where I am required to design and implement 
                    a Unix-like file system, complete with some of the basic functionalities such as create, delete, 
                    read and update directories and files. </p>
                </div>
                <div className="projectColumnImg">
                    <p className="SmallSpacing" />
                    <img className="ProjectImage" src="images/ProjectOS.png" />
                </div>
            </div>
            <p className="SectionSpacing" /> 
        </div>
    )
}