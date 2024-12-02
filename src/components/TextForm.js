import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
}


  const handleBoldClick = () => {
    setBold(!bold); // Toggle bold
    props.showAlert("Converted to Bold Text, Check Preview","success");
  }

  const handleItalicClick = () => {
    setItalic(!italic); // Toggle italic
    props.showAlert("Converted to Italic Text, Check Preview","success");
  }

  const handleUnderlineClick = () => {
    setUnderline(!underline); // Toggle underline]
    props.showAlert("Text is Underlined, Check Preview","success");
  
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowecase","success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text is cleared","success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied","success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(' ');
    setText(newText);
    props.showAlert("Removed Extra Spaces","success");
  }

  const [text, setText] = useState('');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : '#042743',
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleBoldClick}>
          Bold Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleItalicClick}>
          Italic Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUnderlineClick}>
          Underline Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === 'dark' ? 'white' : '#042743',
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length} words and{' '}
          {text.length} characters
          
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => element.length !== 0).length}{' '}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p
          style={{
            fontWeight: bold ? 'bold' : 'normal',
            fontStyle: italic ? 'italic' : 'normal',
            textDecoration: underline ? 'underline' : 'none',
          }}
        >
          {text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}
        </p>
      </div>
    </>
  );
}
