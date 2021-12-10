import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as CodeMirror } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

const Editor = ({ value, language, onChange, name, show }) => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`w-full p-2 pt-4  ${open ? "" : `collapse`} ${
        show ? "" : "hidden"
      } desktop:flex`}
    >
      <div className="w-full round">
        <div className=" bg-gray-800 flex justify-between items-center text-white p-3 shadow-md">
          <p className="text-sm">{name}</p>
          <button
            onClick={() => setOpen(!open)}
            className="hidden desktop:flex"
          >
            <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
          </button>
        </div>
        <div className="code-mirror">
          <CodeMirror
            autoScroll="true"
            value={value}
            options={{
              lineWrapping: true,
              mode: language,
              theme: "material",
              lineNumbers: true,
            }}
            onBeforeChange={(editor, data, value) => onChange(value)}
            scrollbarStyle="simple"
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
