import React from 'react'
import './Sections.css'
import '../../App.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

export default function ResumeSection() {
    return (
        <div className='resumeSectionContainer'>
            <div className="resumeRow">
                <h1 className='resumeTitle'> Resume </h1>
                <a href='https://drive.google.com/file/d/1k5MSGVZXcKqXXd8PkRc2_m8ZSUiHAnc5/view?usp=sharing' >
                    <Button className='resumeDownload' buttonStyle='button--Primary' buttonSize='button--Medium'> Download Resume </Button>
                </a>
            </div>
            <p className="MediumSpacing">  </p>
            <div className="resumeBorderRow">
                <div className="resumeColumn">
                    <p className="resumeSubTitle"><a id="resume__education">Education</a></p>
                </div>
                <div className="resumeColumn">
                    <p className="resumeSubTitle"> 2018 - Present </p>
                    <p className="resumeBody"> South China University of Technology </p>
                    <p className="resumeBody"> Computer Science and Technology</p>
                    <p className="resumeBody"> Guangzhou, China </p>
                </div>
            </div>
            <p className="MediumSpacing">  </p>
            <div className="resumeBorderRow">
                <div className="resumeColumn">
                    <p className="resumeSubTitle"><a id="resume__experience">Experience</a></p>
                </div>
                <div className="resumeColumn">
                    <p className="resumeSubTitle"> 2021 - Present </p>
                    <p className="resumeBody"> Vice President </p>
                    <p className="resumeBody"> International Student Union</p>
                    <p className="resumeBody"> South China University of Technology </p>
                    <p className="SmallSpacing">  </p>
                    <p className="resumeSubTitle"> 2020 - 2021 </p>
                    <p className="resumeBody"> Head of Project Department </p>
                    <p className="resumeBody"> International Student Union</p>
                    <p className="resumeBody"> South China University of Technology </p>
                </div>
            </div>
            <p className="MediumSpacing">  </p>
            <div className="resumeBorderRow">
                <div className="resumeColumn">
                    <p className="resumeSubTitle"><a id="resume__skills">Skills / Expertises</a></p>
                </div>
                <div className="resumeColumn">
                    <div className="resumeSubRow">
                    <div className="resumeColumn">
                            <p className="resumeSubTitle"> Soft Skills </p>
                            <p className="MediumSpacing">  </p>
                            <p className="resumeBody"> Critical Thinksing </p>
                            <p className="SmallSpacing">  </p>
                            <p className="resumeBody"> Leadership</p>
                            <p className="SmallSpacing">  </p>
                            <p className="resumeBody"> Communication </p>
                            <p className="SmallSpacing">  </p>
                            <p className="resumeBody"> Collaboration </p>
                            <p className="SmallSpacing">  </p>
                            <p className="resumeBody"> Motivated </p>
                        </div>
                        <div className="resumeColumn">
                            <p className="resumeSubTitle"> Hard Skills </p>
                            <p className="MediumSpacing">  </p>
                            <p className="resumeBody"> Game Development </p>
                            <p className="SmallSpacing">  </p>
                            <p className="resumeBody"> Software Development </p>
                            <p className="SmallSpacing">  </p>
                            <p className="resumeBody"> UI Design </p>
                            <p className="SmallSpacing">  </p>
                            <p className="resumeBody"> Database Management </p>
                        </div> 
                    </div>
                </div>
            </div>
            <p className="MediumSpacing">  </p>
            <div className="resumeBorderRow">
                <div className="resumeColumn">
                    <p className="resumeSubTitle"><a id="resume__languages">Programming Languages</a></p>
                </div>
                <div className="resumeColumn">
                    <p className="SmallSpacing">  </p>
                    <p className="resumeBody"> - Cpp </p>
                    <p className="resumeBody"> - C# </p>
                    <p className="resumeBody"> - HTML/CSS </p>
                    <p className="resumeBody"> - Java </p>
                    <p className="resumeBody"> - JavaScript </p>
                    <p className="resumeBody"> - Python </p>
                </div>
            </div>
            <p className="MediumSpacing">  </p>
            <div className="resumeBorderRow">
                <div className="resumeColumn">
                    <p className="resumeSubTitle"> Spoken Languages </p>
                </div>
                <div className="resumeColumn">
                    <p className="SmallSpacing">  </p>
                    <p className="resumeBody"> Indonesian - Native</p>
                    <p className="FullBar"> Bar </p>
                    <p className="resumeBody"> English </p>
                    <p className="FullBar"> Bar </p>
                    <p className="resumeBody"> Chinese </p>
                    <p className="QuarterBar"> Bar </p>
                    <p className="resumeBody"> Cantonese </p>
                    <p className="HalfBar"> Bar </p>
                </div>
            </div>
            <p className="SectionSpacing">  </p>
        </div>
    );
}