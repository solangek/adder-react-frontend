import logo from './logo.svg';
import './App.css';
import AddForm from "./components/AddForm";
import {useState} from "react";

/**
 * A simple form submit for adding numbers
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

    /**
     * A function to receive the result from the server and set it to the state
     * @param json the json object received from the server
     */
  function receiveResultFromServer(json) {
        setResult(json.result);
  }

    /**
     * A function to handle errors and display them
     * @param error
     */
  function handleError(error) {
      setError(error.message);
  }

  return (
    <div className="container">
        <h1>A simple form submit for adding numbers</h1>
        <p>
            This is a simple form submission example using React. The form takes two numbers and adds them together. The result is displayed below the form.
            The form is submitted using the Fetch API implemented with Spring (you must run the Spring backend in parallel). The result is received from the server and displayed below the form.
        </p>
      <AddForm url={"/api/add"} receiveResult={receiveResultFromServer} handleError={handleError}/>
      {result ? <div className="mt-3">Result is {result}</div> : ""}
      {error ? <div className="mt=3">Error : {error}</div> : ""}
    </div>
  );
}

export default App;
