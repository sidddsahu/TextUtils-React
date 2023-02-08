import React, { useState } from 'react'
export default function TextForm(props) {
  
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert(" Converted to uppercase", "success")
  }

  const handleLoclick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert(" Converted to Lowercase", "success")

  }

  const handleClearclick = () => {
    let newText = '';
    setText(newText)
    props.showAlert(" Text clear", "success")

  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState("")

  

   const handlecapClick = () => {
    let newText  = text
      .split(' ')
      .map(function (word, index) {
        return word.charAt(0)
          .toUpperCase() + word.slice(1)
          .toLowerCase();
      })
      .join(' ');
      setText(newText );
    props.showAlert(" Convert to Capitalize Case", "success")

  };

  const handleInClick = () => {
    let newText  = text
      .split(' ')
      .map(function (word, index) {
        return word.charAt(0)
          .toLowerCase() + word.slice(1)
          .toUpperCase();
      })
      .join(' ');
      setText(newText );
    props.showAlert(" Convert to iNNEVERSE Case", "success")

  };

  const handleCopy = () => {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert(" Copy text", "success")

  }

  const handleExtraSpace =() =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert(" Remove Extraspace", "success")

  }
 
  return (
    <>
      <div className='container'style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} 
          style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary me-1" onClick={handleUpclick}>Convert to uppercase</button>
        <button className="btn btn-danger me-1" onClick={handleLoclick}>Convert to uppercase</button>
        <button className="btn btn-success me-1" onClick={handlecapClick}>Convert to Capitalize case</button>
        <button className="btn btn-warning me-1" onClick={handleInClick}>Convert to  iNNVERCASE</button>
        <button className="btn btn-dark me-1" onClick={handleClearclick}>Clear all text</button>
        <button className="btn bg-info bg-gradient  me-1" onClick={handleCopy}>Copy text</button>
        <button className="btn bg-danger bg-gradient me-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <a href="" className='btn bg-secondary bg-gradient me-1' value={text} download={text}  >download</a>


      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length >0?text: "Enter something in the text box above to preview ith here"}</p>

      </div>
    </>
  )
}
