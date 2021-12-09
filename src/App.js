import { useEffect, useState } from "react";
import Editor from "./components/editor";
import './App.css'


function App() {
  const [ html, setHtml ] = useState("")
  const [ css, setCss ] = useState("")
  const [ js, setJs ] = useState("")
  const [srcDoc, setSrcDoc ] = useState('')
  useEffect(()=> {
    const timeout = setTimeout(()=> {
      setSrcDoc(`<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>`)
    }, 400)

    return ()=> clearTimeout(timeout)
  }, [html, css, js])
  return (
    <div className="App">
      <div className="flex w-full bg-gray-700 h-auto justify-between">
        <Editor language='xml' value={html} onChange={setHtml} name="HTML" />
        <Editor language='css' value={css} onChange={setCss} name="CSS"   />
        <Editor language='javascript' value={js} onChange={setJs} name="JAVASCRIPT"   />

      </div>
      <div className="w-full h-full">
        <iframe className="w-full h-full" srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameborder="0"></iframe>
      </div>
    </div>
  );
}

export default App;
