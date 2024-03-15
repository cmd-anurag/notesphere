import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import LoadingContext from '../context/LoadingContext';
import Spinner from './Spinner';


const Signup = (props) => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword,setCpassword] = useState('');
  const context = useContext(LoadingContext);
  const {loading, setLoading} = context;
  useEffect(()=> {
    document.body.classList.add('login-background')
    
    return () => {
      document.body.classList.remove('login-background');
    }
  }, [])
  const validateForm = () => {
    if(!name) {
      props.showAlert('warning', 'Please enter a name.');
      document.getElementById('name').style.boxShadow = '0px 0px 5px red';
      document.getElementById('name').focus();
      return false;
    }
    if(cpassword!==password) {
      props.showAlert('danger', 'The Passwords do not match.');
      return false;
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateForm()){return}
    setLoading(true);
    const response = await fetch(`https://notesphere-jyst.onrender.com/api/auth/createUser`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({name, email, password})
      });
    const json = await response.json();
    if(json.result) {
      localStorage.setItem('token', json.authtoken);
      navigate('/');
      setLoading(false);
      props.showAlert('success', 'Sign Up Successful!');
    }
    else {
      props.showAlert('danger', json.error);
      setLoading(false);
    }
  }

  return (
    <div>
      {loading? <Spinner message="Creating an Account..." /> : 
    <div className='container auth-box'>
      <h2 style={{textAlign: 'center'}}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input onBlur={e=> e.target.style.boxShadow = 'None'} onChange={e=>{setName(e.target.value)}} value={name} name='name' type="text" className="form-control" id="name" />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input onChange={e=>{setEmail(e.target.value)}} value={email} name='email' type="email" className="form-control" id="email" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label"> Create Password</label>
    <input minLength={5} onChange={e=>{setPassword(e.target.value)}} value={password} name='password' type="password" className="form-control" id="password" />
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input onChange={e=>{setCpassword(e.target.value)}} value={cpassword} name='cpassword' type="password" className="form-control" id="cpassword" />
  </div>
  <div style={{display: 'flex', justifyContent: 'center'}}>
  <button style={{width: '50%', height: '50px'}} type="submit" className="btn btn-primary">Sign Up</button>
  </div>
</form>
    </div>}
    </div>
  )
}

export default Signup
