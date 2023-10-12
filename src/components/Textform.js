import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was Clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("converted to Lowercase","success");
  }
  const handleClearClick = ()=>{
    // console.log("Uppercase was Clicked" + text);
    let newText = "";
    setText(newText)
    props.showAlert("Text Cleared","success");

}

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
  const[text, setText ] = useState('');
//   setText("new text");
  return (
    <>
    <div className = "container" style={{color: props.mode==='dark'?'white':'#04245c'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value = {text} onChange ={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#04245c' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick = {handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick = {handleClearClick}>Clear Text</button>
    </div>
    <div className="className my-3" style={{color: props.mode==='dark'?'white':'#04245c'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter sth to preview it here"}</p>
    </div>
    </>
  )
}
