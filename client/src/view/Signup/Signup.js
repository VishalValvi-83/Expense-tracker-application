import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from '../../components/Navbar/Navbar'

function Signup() {
  const [user, setUser] = useState({
    fullName: '',
    dob: '',
    email: '',
    password: ''
  })

  const signup = async () => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}signup`, {
      fullName: user.fullName,
      dob: user.dob,
      email: user.email,
      password: user.password
    })
    if (response.data.success) {
      toast.success(response.data.message)
      setUser({
        fullName: '',
        dob: '',
        email: '',
        password: ''
      })
      toast.loading("Redirecting to Login")
      setTimeout(() => {
        window.location.href = '/login'
      }, 2000)
    }
    else {
      toast.error(response.data.message)
    }
  }

  return (
    <>
    <Navbar/>
    <div className='container-fluid d-flex justify-content-center'>
      <div className='signup-form '>
        <h1 className='form-heading mb-3'>Sign Up</h1>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="Full name"
            value={user.fullName}
            onChange={(e) => {
              setUser({ ...user, fullName: e.target.value })
            }} />
          <label for="floatingInput">Full Name</label>
        </div>

        <div class="form-floating mb-3">
          <input type="date" class="form-control" id="floatingInput" value={user.dob} placeholder="Date of Birth" onChange={(e) => {
            setUser({ ...user, dob: e.target.value })
          }} />
          <label for="floatingInput">Date of Birth</label>
        </div>

        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={user.email} onChange={(e) => {
            setUser({ ...user, email: e.target.value })
          }} />
          <label for="floatingInput">Email address</label>
        </div>

        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={user.password} onChange={(e) => {
            setUser({ ...user, password: e.target.value })
          }} />
          <label for="floatingPassword">Password</label>
        </div>

        <div className='form-footer'>
        <button className='btn' onClick={signup} >Register</button>
          <p className='footer-text'>Already have an account? <a href='/login'>Login</a></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup