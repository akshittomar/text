import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const [text, settext] = useState("LIGHT MODE ");
  function handelMode() {
  
    if (props.mode==='light') {
      props.setmode('dark');
      settext("DARK MODE ");
      let v = document.getElementById("super");
      v.style.backgroundColor='#122e34';
      console.log(v);
    } else {
      props.setmode('light');
      settext("LIGHT MODE ");
      let v = document.getElementById("super");
      v.style.backgroundColor='#68949d';
    }
    
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg "  style={{backgroundColor:props.mode==='light'?'#d3e9f0':'rgb(43 54 60)'}} >
    <div className="container-fluid">
      <Link className={`navbar-brand btn btn-outline-${props.mode==='light'?'#d3e9f0':'rgb(43 54 60)'}`} style={{color:props.mode==='light'?'rgb(43 54 60)':'#d3e9f0'}} to={'/'} >TEXT-UTILS</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={'/about'}  style={{color:props.mode==='light'?'rgb(43 54 60)':'#d3e9f0'}} >ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/features'}  style={{color:props.mode==='light'?'rgb(43 54 60)':'#d3e9f0'}}>Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/price'}   style={{color:props.mode==='light'?'rgb(43 54 60)':'#d3e9f0'}}>Pricing</Link>
          </li>
         
          <li className="nav-item" >
          <button type="button" onClick={handelMode} style={{color:props.mode==='light'?'rgb(43 54 60)':'#d3e9f0'}} className={`btn btn-${props.mode==='dark'?'primary':'info'} btn-sm mx-3 my-1`}>{text}</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
  
}
