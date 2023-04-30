import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'

function Signup() {
    const[inputs,setInputs]=useState({
        name: '',
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

        if(errors.name==="" && errors.email==="" && errors.password===""){
          axios.post('http://localhost:8082/signup',inputs)
          .then(res=> {
            navigate('/')
          })
          .catch(error=> console.log(error))
        }
      }
     
      return (
        <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white rounded w-45 p-3'>
                <h3>Sign-up</h3>
                <form action='' onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' placeholder='Enter Name' name='name' onChange={changeInput} className='form-control'/>
                   {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email' name='email' onChange={changeInput}   className='form-control'/>
                  {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-2'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter Password' name='password' onChange={changeInput}   className='form-control'/>
                  {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100'>Signup</button>
                <p>I agree to the Terms and Privacy Policy.</p>
                <Link to='/' className='btn btn-default border w-100'>Login</Link>
                </form>
            </div>
        </div>
      )
    }
export default Signup