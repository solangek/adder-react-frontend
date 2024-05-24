import {useState} from "react";

export default function AddForm({url, receiveResult}) {
    const [operand1, setOperand1] = useState("");
    const [operand2, setOperand2] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({operand1: operand1, operand2: operand2})
        })
            .then(response => response.json())
            .then(json => receiveResult(json));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={operand1} onChange={e => setOperand1(e.target.value)}/>
            <input type="number" value={operand2} onChange={e => setOperand2(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}