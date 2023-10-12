import './App.css';
import React, { useState } from 'react';
import Navbar  from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  
  const [mode,setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);      
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#04245c';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Installs TextUtils Now';
      // }, 1500);
   }
    else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled","success");
    document.title = 'TextUtils - Light Mode';

    }
  }
  return (
    <>
    {/* <Navbar title = "Textutils" aboutText = "About Textutils" /> */}
    {/* <Navbar/> */}
    <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
             {/* ... your other routes ... */}
             <Route path="/example" element={<Link to="/example">Example Link</Link>} />
     
          </Routes>
        </div>
      </Router>
        
        
        
        

    </>  
  );
}

export default App;
