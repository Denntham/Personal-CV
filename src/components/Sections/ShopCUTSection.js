import React from 'react'
import './Sections.css'
import '../../App.css'

export default function ShopCUTSection() {
    return (
        <div className='projectSectionContainer'>
            <div className="projectRow">
                <h1 className='projectTitle'> ShopCUT </h1>
            </div>
            <div className="MediumSpacing">  </div>
            <div className="projectRow">
                <div className="projectColumn">
                <p className="projectSubTitle">Completed: December 2020</p>
                    <p className="SmallSpacing" />
                    <p className="projectBody"> An e-commerce application for students of SCUT created as a project for database course. 
                    The application was created using Visual Studio as the user interface and Oracle's MySQL for its database. </p>
                    <p className="MediumSpacing" />
                    <img className="ProjectImage2" src="images/ShopCUT2.jpg" />
                </div>
                <div className="projectColumnImg">
                <p className="SmallSpacing" />
                    <img className="ProjectImage" src="images/ShopCUT.jpg" />
                </div>
            </div>
            <p className="SectionSpacing" /> 
        </div>
    )
}