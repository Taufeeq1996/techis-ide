import React from 'react';
import useScript from '../hooks/useScript';
import '../Styles/App.css';


function HC() {
    useScript('js/ht-cs.js')
  return (
      <>
          <style id="styling"></style>
          <section id="main-section">
          <div id="html-css-editor">
              <div id="html-div">
              <textarea name="html" id="html-editor"  placeholder='Write HTML code here....'></textarea>
              </div>
              <div id="css-div">
                   <textarea name="css" id="css-editor" placeholder='Write CSS code here....'></textarea>
              </div>
          </div>
              <div id="output" placeholder='Output goes here....'></div>
              {/* <textarea name="output" id="output" placeholder='Output goes here....'></textarea> */}
        </section>
      </>
  )
}

export default HC
