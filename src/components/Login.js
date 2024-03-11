import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!password) {
          props.showAlert('warning', 'Please enter a Password');
          return
        }
        const response = await fetch(`https://notesphere-jyst.onrender.com/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({email, password})
          });
        const json = await response.json();
        if(json.result) {
            // save token and redirect
            localStorage.setItem('token', json.authtoken);
            
            navigate('/');
            props.showAlert('success', 'Login Successful!');
        }
        else {
            props.showAlert('danger', json.error);
        }

    }

  return (
    <div className='auth-box container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
         <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input value={email} onChange={e=>{setEmail(e.target.value)}} name='email' type="email" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input value={password} onChange={e=>{setPassword(e.target.value)}} name='password' type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
  )
}

export default Login
