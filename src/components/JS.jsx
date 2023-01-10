import React from 'react'
import "../Styles/App.css";
import useScript from '../hooks/useScript';


function JS() {
    useScript('js/ace-editor/src-min/ace.js');
    useScript('js/ace-editor/src-min/mode-javascript.js');
    useScript('js/ace-editor/src-min/ext-language_tools.js');
    useScript('js/editor.js');
    useScript('js/editor-console.js');

  return (
    <>
    <div className="editor">
              <div className="editor__wrapper">
                 <div className="editor__footer--left">
                    <button className="editor__btn editor__run">Run</button>
                    <button className="editor__btn editor__reset">Reset</button>
                </div>
            <div className="editor__body">
                <div id="editorCode" className="editor__code">
                </div>
            </div>
            <div className="editor__footer">
                <div className="editor__footer--right">
                    <div className="editor__console">
                        <ul className="editor__console-logs"></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default JS
