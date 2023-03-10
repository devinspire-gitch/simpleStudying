import React from 'react'
import Left from './left'
import Right from './right'
import Footer from '../../components/footer'
import '../../css/signup/signup.css'

const index = () => {
  return (
    <>
      <div className='signup-container'>
          <Left />
          <Right />
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </>
  )
}

export default index
