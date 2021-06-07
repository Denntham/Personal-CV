import React from 'react'
import './Sections.css'
import '../../App.css'

export default function ContactSections() {
    return (
        <div className='contactSectionContainer'>
            <img src='images/background.jpg' className='background'/>
            <h1 className='contactTitle'>Contact Me</h1>
            <p className='contactSubTitle'>Looking forward to hearing from you</p>
            <p className='MediumSpacing' />
            <h2 className='contactSubTitle'>Contact Details</h2>
            <p className='SmallSpacing' />
            <p className='contactSubTitle'> <i className='fa fa-phone' />  Phone : </p>
            <p className='contactSubTitle'> +62 895 - 2421 1829 </p>
            <p className='contactSubTitle'> +62 851 - 5985 2800 </p>
            <p className='SmallSpacing' />
            <p className='contactSubTitle'> <i className='fa fa-inbox' />  Email : </p>
            <p className='contactSubTitle'> thamdennis340@gmail.com </p>
            <p className='SmallSpacing' />
            <p className='contactSubTitle'> Social Media : </p>
            <p className='contactSubTitle'>
                <i className='fab fa-line' /> Line : dennis.tham
            </p>
            <p className='contactSubTitle'>
                <i className='fab fa-instagram' /> Instagram: dennistham
            </p>
            <p className='contactSubTitle'>
                <i className='fab fa-telegram' /> Telegram: Denntham
            </p>
            <p className='MediumSpacing' />
        </div>
    );
}