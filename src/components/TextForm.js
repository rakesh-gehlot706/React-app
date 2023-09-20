import React, { useState } from "react";

// console.log(('Enter text here'));

export default function TextForm(props) {
  const [text, setText] = useState("");
  //text = "new text"; wrong way to change the state//
  //setText('new text');  this is the correct way
  const handleUpClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to the Uppercase!", "success");
    document.title ="websoham- Uppercase";
  };
  const handleDownClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to the Lowercase!", "success");
    document.title ="websoham- Lowercase";
  };
  const handleClearClick = () => {
    // console.log("upper case was clicked" + text);
    // let newText = text.toLowerCase();
    setText('');
    props.showAlert("Clear Text!", "success");
    document.title ="websoham- Clear Text";
  };
  const handleOnChange = (event) => {
    // console.log("on changed");
    setText(event.target.value);
  };

  //for copy content
  const handleCopy = () =>{
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard!", "success");
    document.title ="websoham- Copy Text";
  }
//for space 
  const hanldeExtraSpaces =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Manage Space", "success");
    document.title ="websoham- Handle Space";
  }

  return (
    <>
    <div className="container"style={{Color: props.mode==='dark' ? 'white': 'black'}}>
      <h1 >{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='warning' ? 'lightgray': 'white',color: props.mode==='warning'? 'white': 'black'}} id="myBox" rows="8" 
        ></textarea>
      </div>
      <button className="btn btn-warning" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-warning" onClick={handleDownClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-warning" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-warning" onClick={handleCopy}>
        Copy text
      </button>
      <button className="btn btn-warning" onClick={hanldeExtraSpaces}>
        Handle spaces
      </button>
      
    </div>
    <div className="container my-4">
      <h2>Your Text Summery</h2>
      <p> {text.split(" ").length} Words   and  {text.length}Characters</p>
      <p> {0.008 * text.split (" ").length}</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    
    </>
  );
}
