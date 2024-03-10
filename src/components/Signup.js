import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NoteContext from '../context/notes/NoteContext'

const Signup = (props) => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
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
      props.showAlert('success', 'Sign Up Successful');
    }
    else {
      props.showAlert('danger', 'Please check the credentials');
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input onChange={e=>{setName(e.target.value)}} value={name} name='name' type="text" className="form-control" id="name" />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input onChange={e=>{setEmail(e.target.value)}} value={email} name='email' type="email" className="form-control" id="email" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input minLength={5} onChange={e=>{setPassword(e.target.value)}} value={password} name='password' type="password" className="form-control" id="password" />
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input name='cpassword' type="password" className="form-control" id="cpassword" />
  </div>
  <button type="submit" className="btn btn-primary">Sign Up</button>
</form>
    </div>
  )
}

export default Signup
