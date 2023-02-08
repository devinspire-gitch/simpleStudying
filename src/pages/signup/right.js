import React from 'react'
import GoogleSigninBtn from '../../components/googleBtn'
import FBSigninBtn from '../../components/fbBtn'

const right = () => {
  return (
    <div className='right-container'>
      <h2>Sign up to SimpleStudying</h2>
      <div className='main-container'>
        <GoogleSigninBtn />
        <FBSigninBtn />
        <div className='or-line'>
          <div className='line1'></div>
          <p>or</p>
          <div className='line2'></div>
        </div>
      </div>
    </div>
  )
}

export default right