import { useEffect, useState } from "react";
import Editor from "./components/editor";
import "./App.css";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [showHtml, setShowHtml] = useState(true);
  const [showCss, setShowCss] = useState(false);
  const [showJs, setShowJs] = useState(false);
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>`);
    }, 400);

    return () => clearTimeout(timeout);
  }, [html, css, js]);
  const showEditor = (e) => {
    const btnName = e.target.innerText;
    if (btnName === "HTML") {
      setShowHtml(true);
      setShowCss(false);
      setShowJs(false);
    } else if (btnName === "CSS") {
      setShowCss(true);
      setShowHtml(false);
      setShowJs(false);
    } else {
      setShowJs(true);
      setShowHtml(false);
      setShowCss(false);
    }
  };
  return (
    <div className="App flex flex-col sm:flex-row desktop:flex-col">
      <div className="desktop:flex w-full bg-gray-700 h-auto justify-between">
        <div className="desktop:hidden p-2 text-gray-900 text-xs font-bold">
          <button
            onClick={(e) => showEditor(e)}
            className="bg-gray-600 p-2 rounded mr-4 hover:bg-gray-500"
          >
            HTML
          </button>
          <button
            onClick={(e) => showEditor(e)}
            className="bg-gray-600 p-2 rounded mr-4 hover:bg-gray-500"
          >
            CSS
          </button>
          <button
            onClick={(e) => showEditor(e)}
            className="bg-gray-600 p-2 rounded mr-4 hover:bg-gray-500"
          >
            JS
          </button>
        </div>
        <Editor
          language="xml"
          value={html}
          onChange={setHtml}
          name="HTML"
          show={showHtml}
        />
        <Editor
          language="css"
          value={css}
          onChange={setCss}
          name="CSS"
          show={showCss}
        />
        <Editor
          language="javascript"
          value={js}
          onChange={setJs}
          name="JS"
          show={showJs}
        />
      </div>
      <div className="w-full h-1/2 sm:h-full desktop:h-1/2">
        <iframe
          className="w-full h-full"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
