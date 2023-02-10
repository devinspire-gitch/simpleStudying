import React, { useState } from 'react'
import GoogleSigninBtn from '../../components/googleBtn'
import FBSigninBtn from '../../components/fbBtn'
import { useNavigate } from 'react-router-dom'

const Right = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isWrongPassword, setIsWrongPassword] = useState(false)

  const handleSubmit = (event) => {
    if (password !== confirmPassword) {
      setIsWrongPassword(true)
    } 
    console.log(email, username, password, confirmPassword)
    navigate('/step1', { replace: true })
  }

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
        <form onSubmit={handleSubmit}>
          <div className='input-area'>
            <p className='input-text'>Email</p>
            <input className='inputbox' onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required/>
          </div>
          <div className='input-area'>
            <p className='input-text'>Username</p>
            <input className='inputbox' onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username' required/>
          </div>
          <div className='password-container'>
            <p className='input-text'>Password</p>
            <div className='pass'>
              <input className='password' type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' required/>
              <svg className='password-eye' width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9187 1.57772C9.33726 -0.586498 3.05819 2.18368 0.893965 7.76509C0.835345 7.91627 0.835345 8.0839 0.893965 8.23508C1.9953 11.0754 4.24104 13.3211 7.08133 14.4224C12.6627 16.5867 18.9418 13.8165 21.106 8.23508C21.1647 8.0839 21.1647 7.91627 21.106 7.76509C20.0047 4.92479 17.759 2.67906 14.9187 1.57772ZM19.7993 8.00017C17.8118 12.7544 12.3843 15.0844 7.55132 13.2104C5.1305 12.2717 3.20046 10.3884 2.20072 8C4.18824 3.2458 9.61568 0.91577 14.4487 2.78979C16.8695 3.72848 18.7995 5.61178 19.7993 8.00017ZM6.85 8.00008C6.85 10.2921 8.70802 12.1501 11 12.1501C13.292 12.1501 15.15 10.2921 15.15 8.00008C15.15 5.7081 13.292 3.85008 11 3.85008C8.70802 3.85008 6.85 5.7081 6.85 8.00008ZM13.85 8.00008C13.85 9.57409 12.574 10.8501 11 10.8501C9.42599 10.8501 8.15 9.57409 8.15 8.00008C8.15 6.42607 9.42599 5.15008 11 5.15008C12.574 5.15008 13.85 6.42607 13.85 8.00008Z" fill="#434343" stroke="#434343" stroke-width="0.3"/>
              </svg>
            </div>
          </div>
          <div className='confirm-container'>
            <p className='input-text'>Confirm Password</p>
            <input className='confirm-password' type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm your email' required/>
            <svg className='confirm-eye' width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9187 1.57772C9.33726 -0.586498 3.05819 2.18368 0.893965 7.76509C0.835345 7.91627 0.835345 8.0839 0.893965 8.23508C1.9953 11.0754 4.24104 13.3211 7.08133 14.4224C12.6627 16.5867 18.9418 13.8165 21.106 8.23508C21.1647 8.0839 21.1647 7.91627 21.106 7.76509C20.0047 4.92479 17.759 2.67906 14.9187 1.57772ZM19.7993 8.00017C17.8118 12.7544 12.3843 15.0844 7.55132 13.2104C5.1305 12.2717 3.20046 10.3884 2.20072 8C4.18824 3.2458 9.61568 0.91577 14.4487 2.78979C16.8695 3.72848 18.7995 5.61178 19.7993 8.00017ZM6.85 8.00008C6.85 10.2921 8.70802 12.1501 11 12.1501C13.292 12.1501 15.15 10.2921 15.15 8.00008C15.15 5.7081 13.292 3.85008 11 3.85008C8.70802 3.85008 6.85 5.7081 6.85 8.00008ZM13.85 8.00008C13.85 9.57409 12.574 10.8501 11 10.8501C9.42599 10.8501 8.15 9.57409 8.15 8.00008C8.15 6.42607 9.42599 5.15008 11 5.15008C12.574 5.15008 13.85 6.42607 13.85 8.00008Z" fill="#434343" stroke="#434343" stroke-width="0.3"/>
            </svg>  
          </div>
          {isWrongPassword && <p className='wrong-password'>Please input correct password</p>}
          <input type='submit' className='signup-btn' value="Sign up"/>
          <div className='already-login'>
            <p>Already have an account?</p>
            <a className='login'>Log in</a>
          </div>
          <button className='support-btn'></button>
        </form>
      </div>
    </div>
  )
}

export default Right