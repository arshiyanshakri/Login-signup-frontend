import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'

function Login() {
  const[inputs,setInputs]=useState({
    email: '',
    password: ''
  })
  
  const navigate=useNavigate()

  const changeInput=(event)=> {
    setInputs(prev=>({...prev,[event.target.name]:[event.target.value]}))
  }

  const [errors,setErrors]=useState({})

   const onSubmit=(event) => {
    event.preventDefault();
    setErrors(Validation(inputs));

    if(errors.email==="" && errors.password===""){
      axios.post('http://localhost:8082/login',inputs)
      .then(res=> {
        if(res.data==="True"){
          navigate('/home')
        }
        else{
          alert("Account not registered")
        }
      })
      .catch(error=> console.log(error))
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
        <div className='bg-white rounded w-45 p-3'>
        <h3>Sign-in</h3>
            <form action='' onSubmit={onSubmit}>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Email' name='email' onChange={changeInput} className='form-control'/>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
              </div>
              <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter Password' name='password'  onChange={changeInput} className='form-control'/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>
            <button type='submit' className='btn btn-success w-100'>Login</button>
            <p>I agree to the Terms and Privacy Policy.</p>
            <Link to='/signup' className='btn btn-default border w-100'>Create Account</Link>
            </form>
        </div>
    </div>
  )
}
export default Login