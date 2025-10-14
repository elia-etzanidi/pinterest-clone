import './authPage.css'
import Image from '../../components/image/Image'
import { useState } from 'react'

const authPage = () => {

  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState("")

  return (
    <div className='authPage'>
      <div className="authContainer">
        <Image src="/general/logo.png" w={36} h={36} alt=""/>
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key="registerForm">
            <div className="formGroup">
              <label htmlFor="">Username</label>
              <input type="username" placeholder='Username' required name="username" id="username" />
            </div>
            <div className="formGroup">
              <label htmlFor="">Name</label>
              <input type="Name" placeholder='Name' required name="Name" id="Name" />
            </div>
            <div className="formGroup">
              <label htmlFor="">Email</label>
              <input type="email" placeholder='Email' required name="email" id="email" />
            </div>
            <div className="formGroup">
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Password' required name="password" id="password" />
            </div>
            <button type='submit'>Register</button>
            <p onClick={() => setIsRegister(false)} >Do you have an account? <b>Login</b> </p>
            {error && <p className='error'>{error}</p>}
          </form>
         ) : (
          <form key="loginForm">
          <div className="formGroup">
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email' required name="email" id="email" />
          </div>
           <div className="formGroup">
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Password' required name="password" id="password" />
          </div>
          <button type='submit'>Login</button>
          <p onClick={() => setIsRegister(true)} >Don't have an account? <b>Register</b> </p>
          {error && <p className='error'>{error}</p>}
        </form>
        )}
      </div>
    </div>
  )
}

export default authPage