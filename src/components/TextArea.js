import React from 'react'
import Alert from './Alert';
import { useState } from 'react'

export default function TextArea(props) {
    console.log(props.hi);
const [Text, setText] = useState('ENTER TEXT HERE ');
const [val, setval] = useState(false);

function handleUp() {
    setText(Text.toUpperCase());
    props.message("SECCESS"," CONVERTED TO UPPER CASE ");
   
   setval(true);
   setTimeout(() => {
    setval(false);  
   }, 1000);
  
}

function handleDwn() {
    setText(Text.toLowerCase());
    props.message("SECCESS"," CONVERTED TO LOWER CASE ");
   
    setval(true);
    setTimeout(() => {
     setval(false);  
    }, 1000);
   
    
}

function handleCl() {
    setText("");
    props.message("SECCESS"," CLEARED TEXT  ");
   
    setval(true);
    setTimeout(() => {
     setval(false);  
    }, 1000);
   
    
}


    function changing(event) {
        setText(event.target.value);
        // console.log(Text);
    }
  return (
    <>
    <div>
   
  {val  && <Alert alert={props.alert} mode={props.mode} setmode={props.setmode} /> } 
    </div>
    <div>
        <h1   style={{color:props.mode==='light'?'rgb(43 54 60)':'#d3e9f0',marginTop:19}}><strong>{props.heading}</strong></h1>
    <div className="mb-3">
  
  <textarea className="form-control" id="exampleFormControlTextarea1" aria-label=".form-control-lg"  style={{backgroundColor:props.mode==='dark'?'rgb(43 54 60)':'#d3e9f0',color:props.mode==='light'?'rgb(43 54 60)':'#d3e9f0'}} value={Text} onChange={changing}  rows="9" cols="5"></textarea>
  
</div>

    <div>
        <p style={{color:props.mode==='light'?'rgb(43 54 60)':'#d3e9f0'}}>
            YOUR TEXT HAVE {Text.length} CHARACTERS AND {Text.split(' ').length-1} WORDS.
        </p>
        <p style={{color:props.mode==='light'?'rgb(43 54 60)':'#d3e9f0'}}>
            TIME REQUIRED TO READ {Text.length*0.008} MINUTES
        </p>
    </div>

<div>
<button type="button"  onClick={handleUp}   className={`btn btn-outline-${props.mode==='light'?'info':'secondary'}`}>CONVERT TO UPPER-CASE</button>
<button type="button" onClick={handleDwn} className={`btn btn-outline-${props.mode==='light'?'info':'secondary'} mx-3 my-3`}>CONVERT TO LOWER-CASE</button>   
<button type="button" onClick={handleCl} className={`btn btn-outline-${props.mode==='light'?'info':'secondary'}  my-1`}>CLEAR YOUR TEXT</button>

</div>

<div className='my-3'>
    <h5 style={{color:props.mode==='light'?'rgb(43 54 60)':'#d3e9f0'}}>PREVIEW YOUR TEXT BELOW </h5>
    <p style={{color:props.mode==='light'?'rgb(43 54 60)':'#d3e9f0'}}>{Text}</p>
</div>


    </div>
    
    </>
  )
}