import React from 'react'
import logoImg from '../assets/simple_studying_logo.png'
import '../css/signup/signup.css'

const logo = () => {
  return (
    <div className='logo'>
        <img src={logoImg} alt='logo'/>
    </div>
  )
}

export default logo