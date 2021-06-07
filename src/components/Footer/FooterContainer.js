import React from 'react'
import Footer from './Footer'
import Icons from '../Icons/Icons'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title href="Resume">Resume</Footer.Title>
                        <Footer.Links href="Resume#resume__education">Education</Footer.Links>
                        <Footer.Links href="Resume#resume__experience">Experience</Footer.Links>
                        <Footer.Links href="Resume#resume__skills">Skills</Footer.Links>
                        <Footer.Links href="Resume#resume__languages">Languages</Footer.Links>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title href="Project">Projects</Footer.Title>
                        <Footer.Links href="Unix">Unix Design</Footer.Links>
                        <Footer.Links href="ShopCUT">ShopCUT</Footer.Links>
                        <Footer.Links href="TombRaider">Raider of the Tomb</Footer.Links>
                        <Footer.Links href="Dompetku">Dompetku</Footer.Links>
                        <Footer.Links href="Cerberus">Codename Cerberus</Footer.Links>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title href="Contact">Contact</Footer.Title>
                        <Footer.Links href="https://line.me/ti/p/~dennis.tham"><Icons className='fab fa-line' /> Line </Footer.Links>
                        <Footer.Links href="https://www.instagram.com/dennistham/"><Icons className='fab fa-instagram' /> Instagram </Footer.Links>
                        <Footer.Links href="https://www.linkedin.com/in/dennis-tham-4bab4b199/"><Icons className='fab fa-linkedin-in' /> LinkedIn </Footer.Links>
                        <Footer.Links href="https://t.me/Denntham"><Icons className='fab fa-telegram' /> Telegram </Footer.Links>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    ) 
}