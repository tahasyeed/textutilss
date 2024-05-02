
import { useState } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './Components/Contact';
import Address from './Components/Address';
// import { Routes,Route } from 'react-router-dom'


function App() {

  const [mode, setMode] = useState('light') //wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
    
  }


  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      
      document.body.style.backgroundColor ='black'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success")
    
      
     
    }
}

  return (
    <>
  <Router>
      <Navbar title="TextUtils" about="Services" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-5">
      <Routes>
          
          
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse"/>}></Route>
         
          <Route exact path="/about" element={<About />} ></Route>
          <Route exact path="/Contact" element={<Contact />} ></Route>
          <Route exact path="/Address" element={< Address/>} ></Route>
         
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse"/>}></Route>
         
      </Routes>
        
      
      </div>
      </Router>
   </>
  );
}

export default App;

     