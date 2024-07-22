import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from '../../components/Navbar/Navbar'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = async () => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}login`, {
      email: email,
      password: password
    })
    if (!response.data.message) {
      return
    }
    else{
      toast.success(response.data.message)
      localStorage.setItem('currentUser', JSON.stringify(response.data.data))
      toast.loading("Redireting to Dashboard")
      setTimeout(() => {
        toast.dismiss()
        window.location.href = '/'
      }, 2000)
      // } else if (email.length === 0) {
      //   toast.error("Please Enter Email")
      //   document.getElementById('floatingInput').classList.add('is-invalid')
      //   setTimeout(() => {
      //     document.getElementById('floatingInput').classList.remove('is-invalid')
      //   }, 3000)
      // } else if (password.length === 0) {
      //   toast.error("Please Enter Password")
      //   document.getElementById('floatingPassword').classList.add('is-invalid')
      //   setTimeout(() => {
      //     document.getElementById('floatingPassword').classList.remove('is-invalid')
      //   }, 3000)
    }
  }

  return (<>
    <Navbar />
    <div className='container-fluid d-flex justify-content-center'>
      <div className='login-form '>
        <h1 className='form-heading  my-4'>LOGIN</h1>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="floatingInput">Email address</label>
        </div>

        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <label for="floatingPassword">Password</label>
        </div>
        <div className='form-footer'>
          <button className='btn' onClick={login} >Login</button>
          <p className='footer-text'>Don't have an account? <a href='/signup'>Signup</a></p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login