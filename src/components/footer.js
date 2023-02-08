import React from 'react'
import Logo from './logo'
import '../css/footer.css'

const footer = () => {
  return (
    <div className='footer'>
        <Logo />
        <div className='quick-links'>
            <p>Quick Links:</p>
            <a>Home</a>
            <a>Study Tips</a>
            <a>Exam Tips</a>
            <a>Your Membership</a>
            <a>Student Ambassador</a>
        </div>
        <div className='our-team'>
            <p>Our Team:</p>
            <a>About Us</a>
            <a>Contact Us</a>
            <a>Our Partners</a>
            <a>Join Our Team</a>
        </div>
        <div className='legal'>
            <p>Legal:</p>
            <a>Terms & Conditions</a>
            <a>Privacy Policy</a>
            <a>Cookies Policy</a>
        </div>
        <div className='subscribe'>
            <p>Stay in Touch with Us:</p>
            <div className='subscribe-box'>
                <input placeholder='Email' />
            </div>
        </div>
    </div>
  )
}

export default footer