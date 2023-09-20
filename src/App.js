
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import react, { useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"; 

function App() {
  const [Mode, setMode] = useState("warning"); // weather dark mode is enable or not
  const [alert, setAlert] = useState(null); //alert method

  const showAlert = (message ,type)=>{ // for alert msg and this is a function
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {  // settimeout function for alert message 
        setAlert(null);
      },3000);
  }

  


 const toggleMode = ()=>{ // toggle mode with enable for dark and light mode
  if(Mode === 'light'){
    setMode('warning');
    document.body.style.backgroundColor = 'gray';
    showAlert("Dark mode has been enabled","success");
    document.title ="websoham- Dark Mode";

    // setInterval(() => {
    //   document.title ="websoham is a amazing mode";
    // }, 2000);
    // setInterval(() => {
    //   document.title =" Install Now websoham ";
    // }, 1500);                             ****** title pr run time me show karne k liye

  }
else{
    setMode('light');
    document.body.style.backgroundColor = 'white ';
    showAlert("Light mode has been enabled","success");
    document.title ="websoham- Light Mode";
  }
 }
  return (
    // JSX (java script and html)
   <>
   <Navbar title="Websoham" mode={Mode} toggleMode={toggleMode} aboutText='About Us'/>

   <div className="container my-3 p-2"> 
   <Alert alert={alert}/>
   </div>
   
   <div className="container my-5"> 
   <TextForm showAlert={showAlert} heading="Enter the text to analize" mode={Mode}/> 
 
  <About/>

  </div> 
    </>
  );
}

export default App;

