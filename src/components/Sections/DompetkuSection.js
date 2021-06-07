import React from 'react'
import './Sections.css'
import '../../App.css'

export default function DompetkuSection() {
    return (
        <div className='projectSectionContainer'>
            <div className="projectRow">
                <h1 className='projectTitle'> Dompetku </h1>
            </div>
            <p className="MediumSpacing" />
            <div className="projectRow">
                <div className="projectColumn">
                    <p className="projectSubTitle">Completed: December 2019</p>
                    <p className="SmallSpacing" />
                    <p className="projectBody"> A budgeting application created with goal to keep tracks of individual expenses, complete with 
                    a number of customizable categories, statistics, reminders and historical transactions. The application was created 
                    specifically for Android OS users, using Android Studio IDE.</p>
                    <p className="MediumSpacing" />
                    <img className="ProjectImage2" src="images/Dompetku.jpg" />
                </div>
                <div className="projectColumnImg">
                    <p className="SmallSpacing" />
                    <img className="ProjectImage" src="images/Dompetku2.jpg" />
                </div>
            </div>
            <p className="MediumSpacing" /> 
        </div>
    )
}