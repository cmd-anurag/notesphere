import { useState } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/NoteState';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Alert from './components/Alert';


function App() {
  const[alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({type: type, msg: message});
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <>
    <NoteState>
    <BrowserRouter>

    <Navbar />
    <Alert alert={alert} />
    <Routes>
      <Route exact path='/' element={<Home showAlert={showAlert}/>} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/login' element={<Login showAlert={showAlert} />} />
      <Route exact path='/signup' element={<Signup showAlert={showAlert} />} />
    </Routes>
    
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
