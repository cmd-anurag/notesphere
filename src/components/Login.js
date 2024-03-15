import React, {useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingContext from '../context/LoadingContext'
import Spinner from './Spinner'

const Login = (props) => {
  

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    const context = useContext(LoadingContext);
    const {loading, setLoading} = context;

    
    
    useEffect(()=> {

      if(localStorage.getItem('token')) {
        navigate('/');
      }

      document.body.classList.add('login-background')
      
      return () => {
        document.body.classList.remove('login-background');
      }
    }, [navigate])

    
    const handleSubmit = async (e) => {
      
        e.preventDefault();
        if(!password || !email) {
          props.showAlert('warning', 'Please enter a Email and Password')
          return;
        }
        setLoading(true);
        const response = await fetch(`https://notesphere-jyst.onrender.com/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({email, password})
          });
        const json = await response.json();
        if(json.result) {
            setLoading(false);
            // save token and redirect
            localStorage.setItem('token', json.authtoken);
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
      <h2 style={{textAlign: 'center'}}>Login</h2>
      <form onSubmit={handleSubmit}>
         <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input value={email} onChange={e=>{setEmail(e.target.value)}} name='email' type="email" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input value={password} onChange={e=>{setPassword(e.target.value)}} name='password' type="password" className="form-control" id="password" />
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <button style={{height: '50px', width: '50%', marginTop: '30px'}} type="submit" className="btn btn-primary">Login</button>
        </div> 
    </form>
    </div>}
    </div>
  )
}

export default Login
