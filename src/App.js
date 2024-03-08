import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/NoteState';
import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
// import Alert from './components/Alert';

function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>

    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
    </Routes>
    
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
