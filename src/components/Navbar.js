import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom' 



export default function Navbar() {

  let location = useLocation();
  let navigate = useNavigate();
  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>
    <img src="./note.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
      NoteSphere
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?'active':""}`} aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?'active':""}`} to='/about'>About</Link>
        </li>
        
      </ul>
        {!localStorage.getItem('token') && <Link to="/login" className="btn btn-outline-success mx-2" type="submit">Login</Link>}
        {!localStorage.getItem('token') && <Link to="/signup" className="btn btn-outline-primary mx-2" type="submit">Sign Up</Link>}
        {localStorage.getItem('token') && <button onClick={logout} type="button" className="btn btn-outline-danger">Logout</button>}
    </div>
  </div>
</nav>
    </div>
  )
}
