import { useState } from 'react';
import './App.css';
//import About_us from './component/About_us';
import Navbar from './component/Navbar';
import TextForms from './component/TextForms';
import Alert from './component/Alert';

function App() 
{
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setalert(null);
    },1500);
  }
  const toggleMode = () => {
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showalert("Light Mode Enabled","success");
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showalert("Dark Mode Enabled","success");
    }
  }
  return (
    <>
      <Navbar title = "TextWebSite" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <TextForms showalert={showalert} heading = "Enter the text below to analyze" mode={mode}/>
          {/* <About_us/> */}
      </div>
    </>
  );
}

export default App;
