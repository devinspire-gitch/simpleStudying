import React from 'react'
import Logo from '../../components/logo'
import signupImg from '../../assets/image.png'

const Left = () => {
  return (
    <div className='left-container'>
        <div>
          <div className='shape-background'></div>
            <svg id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,600 C 0,600 0,300 0,300 C 182.93333333333334,301.06666666666666 365.8666666666667,302.1333333333333 537,327 C 708.1333333333333,351.8666666666667 867.4666666666667,400.53333333333336 1016,400 C 1164.5333333333333,399.46666666666664 1302.2666666666667,349.73333333333335 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" fill="#FFFAF3" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)">
              </path>
            </svg>
        </div>
        <div className='signup-logo'>
          <Logo />
        </div>
        <img className='signup_manner' src={signupImg} alt='signup manner' />
    </div>
  )
}

export default Left