import React from 'react'
import Logo from '../../components/logo'
import signupImg from '../../assets/image.png'

const left = () => {
  return (
    <div className='left-container'>
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
            <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" stroke-width="120" stroke-linecap="round"/>
        </svg>
        <div className='signup-logo'>
          <Logo />
        </div>
        <img className='signup_manner' src={signupImg} alt='signup manner' />
    </div>
  )
}

export default left