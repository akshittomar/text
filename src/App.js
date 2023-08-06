
import Navbar from './components/Navbar';
import { useState } from 'react';
import './App.css';
import TextArea from './components/TextArea';
import About from './components/About';
import Feature from './components/Feature';
import Price from './components/Price';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [Dialog, setDialog] = useState(" ");
  const [mode, setmode] = useState('light');

  function setMessage(greet,mssg) {
    setDialog(greet+mssg);
  }
  return (
   <>
   <Router>
   <div className='my-3'>
   <Navbar  mode={mode} setmode={setmode} />
   </div>
   <Routes>
    <Route exact path='/' element={ <div className='my-4 mx-3'><TextArea hi="hello" heading="ENTER TEXT HERE " alert={Dialog}  message={setMessage} mode={mode} setmode={setmode} /></div>}></Route>
   <Route exact path='/about' element={<div className='my-5 mx-4'><About  mode={mode} setmode={setmode}/></div>} ></Route>
   <Route exact path='/features' element={ <Feature  mode={mode} setmode={setmode}/>}></Route>
   <Route exact path='/price' element={ <Price  mode={mode} setmode={setmode}/>}></Route>
   
   </Routes >
   </Router>
   </>

  );
}

export default App;
