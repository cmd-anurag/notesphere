import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingContext from '../context/LoadingContext'
import Spinner from './Spinner'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    const context = useContext(LoadingContext);
    const {loading, setLoading} = context;
    
    const handleSubmit = async (e) => {
      setLoading(true);
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
            setLoading(false);
            navigate('/');
            props.showAlert('success', 'Login Successful!');
        }
        else {
            props.showAlert('danger', json.error);
            setLoading(false);
        }

    }

  return (
    <div>
      {loading? <Spinner message="Logging you in, Please Wait..." /> : 
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
    </div>}
    </div>
  )
}

export default Login
