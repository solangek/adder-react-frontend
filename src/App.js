import logo from './logo.svg';
import './App.css';
import AddForm from "./components/AddForm";
import {useState} from "react";

function App() {
  const [result, setResult] = useState("");
  function receiveResultFromServer(json) {
        setResult(json.result);
  }
  return (
    <>
      <AddForm url={"/api/add"} receiveResult={receiveResultFromServer}/>
      {result ? <div className="border p-3">Result is {result}</div> : ""}
    </>
  );
}

export default App;
