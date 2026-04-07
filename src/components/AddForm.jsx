// src/components/AddForm.js
import { useState } from "react";
import { apiCall } from "../utils/api";

/**
 * A simple form for adding two numbers
 * @param url the url to send the request to
 * @param receiveResult a function to receive the result from the server
 * @param handleError a function to handle errors
 * @returns {JSX.Element}
 */
function AddForm({ url, receiveResult, handleError }) {
    const [operands, setOperands] = useState({ operand1: "", operand2: "" });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setOperands((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        receiveResult("");
        handleError("");

        try {
            //url = url + `/a/${operands.operand1}/b/${operands.operand2}`;
            const result = await apiCall(url, "POST",   {
                operand1: Number(operands.operand1),
                operand2: Number(operands.operand2),
                operation: operands.operation || "+"
            });
            receiveResult(result);
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="operand1" className="form-label">Number 1</label>
                <input
                    type="number"
                    className="form-control"
                    id="operand1"
                    value={operands.operand1}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="operand2" className="form-label">Number 2</label>
                <input
                    type="number"
                    className="form-control"
                    id="operand2"
                    value={operands.operand2}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="operand2" className="form-label">Operation</label>
                <input
                    type="text"
                    className="form-control"
                    id="operation"
                    value={operands.operation || "+"}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    );
}

export default AddForm;
