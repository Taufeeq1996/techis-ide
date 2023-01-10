import React  from 'react';
import Img from './components/img';
import App1 from './components/App1';
import HtmlCss from './components/Html-css';
import JS from './components/JS';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import DropDownProfile from './components/DropDownProfile';
import logo from './Styles/techis-logo.png';
import './Styles/App.css';
import HC from './components/hc';
import {useState,useEffect} from 'react';


function App() {
  const [language , setLanguage] = useState('');
  useEffect(() => {
    const storedState = localStorage.getItem('language');
    if(storedState){
      setLanguage(JSON.parse(storedState));
    }
  },[]);
  useEffect(() => {
    localStorage.setItem('language',JSON.stringify(language))
  }, [language]);
  return (
      <>
      <Router>
      <header>
      <div id="navigate">
      <div id="heading-logo">
      <Link to="/"><img src={logo} id="techis-logo" alt="" onClick={() => setLanguage('Select Language')}/></Link>
      <h1 id="tech-heading">Tech I.S.</h1>
      </div>
      <DropDownProfile language = {language} onLanguageChange={setLanguage}/>
      </div>
      </header>
        <Routes>
        <Route path="/" element={<Img />} />
        </Routes>
      <div>
              <Routes>
                  <Route path="/html-css" element={<HC/>} />
                  <Route path="/python" element={<App1 />} />
                  <Route path="/javascript" element={<JS />} />
              </Routes>
      </div>
      </Router>
    </>
  )
}

export default App;


