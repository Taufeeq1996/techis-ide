import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import '../Styles/App.css'
import useScript from '../hooks/useScript';


function DropDownProfile(props) {
  useScript('js/click.js');
  const [language , setLanguage] = useState(props.language);
  
  return (
    <>
      <button id="dropdown">
        <p id="lang-title">{props.language}</p>
        <ul id="language-list">
          <li onClick={()=>props.onLanguageChange('HTML CSS')}>
            <Link to="/html-css">HTML CSS</Link>
          </li>
          <li onClick={()=>props.onLanguageChange('Python')}>
            <Link to="/python">Python</Link>
          </li>
          <li onClick={()=>props.onLanguageChange('JavaScript')}>
            <Link to="/javascript">JavaScript</Link>
          </li>
        </ul>
      </button>
      </>
  )
}
export default DropDownProfile
