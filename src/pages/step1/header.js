import React from 'react'
import smLogo from '../../assets/simple_studying_logo-small.png'
import '../../css/step1.css'

const header = () => {
  return (
    <div className='step1-header'>
        <img src={smLogo} alt='small logo' />
        <div className='step1-line'>
            
        </div>
    </div>
  )
}

export default header