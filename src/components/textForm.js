import React, {useState} from 'react'

import '../App.css';
export default function TextForm() {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }
    const handleCopy = () => {
        var text1 = document.getElementById("myBox");
        text1.select();
        navigator.clipboard.writeText(text1.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState("Enter text here");
  return (
    <div>
        {/* text area form */}
       <div className="container">
       <h1>Enter the test here</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        {/* button */}
        <button className="btn btn-primary btn-space" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary btn-space" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary btn-space" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary btn-space" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary btn-space" onClick={handleExtraSpaces}>Remove extra spaces</button>
       </div>

       <div className='container my-3'>
              <h3>Your text summary</h3>
              <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
        </div>
    </div>
  )
}


