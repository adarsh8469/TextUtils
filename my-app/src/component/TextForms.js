import React, {useState} from 'react'


export default function TextForms(props) {
  const[text, setText] = useState('');
  
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to UpperCase!!!","success");
  }
  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to LowerCase!!!","success");
  }
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showalert("Cleared the TextField!!!","success");
  }
  const handletoBold = () => {
    let newText = Array.from(text).reverse().join("");
    setText(newText);
    props.showalert("Reversed the String!!!","success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value); //we made this funtion so that we can write in the text box
  }

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3" style={{fontSize : '60px'}}>
        <textarea className="form-control" value = {text} style = {{backgroundColor : props.mode === 'dark'?'#ffD':'white'}} onChange = {handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleUpclick}>Convert to UpperCase</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleLoclick}>Convert to LowerCase</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handletoBold}>Reverse the Alphabates</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleClear}>Clear</button>
      </div>

      <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p><b>{text.split(' ').filter((element) => { return element.length !== 0}).length}</b> words and <b>{text.length}</b> characters</p>
          <p>Average Reader will take <b>{0.008 * text.split(' ').filter((element) => { return element.length !== 0}).length}</b> Minute to read above words.</p>
          <h2>Preview</h2>
          <p>{text.length > 0?text:"Enter Some Text in the Above TextField to Preview it Here!!!"}</p>
      </div>
    </>
  )
}