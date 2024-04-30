import logo from "./logo.svg";
import "./App.css";
import Result from "./Result/Result";
import InputForm from "./InputForm/InputForm";
import { useState } from "react";
function App() {
  const [result, setResult] = useState(null);
  return (
    <div className="App">
      <InputForm setResult={(data) => setResult(data)} />
      {result && <Result result={result.Result} />}
    </div>
  );
}

export default App;
