import React, {useState} from "react";
import UnOrdered from "./Ulist";

function Form() {
    const [theInput, setTheInput]  = useState("")
    const [items, setItems] = useState([])

    function handleChange(event) {
        var {value} = event.target;
        console.log(value);
        setTheInput(value)
    }

    function handleSubmit() {
        setItems((previousValue) => {
           return [...previousValue, theInput]
        })

        setTheInput("")
    }

    return (
        <>
        <div className="form">
            <input type="text" onChange={handleChange} value={theInput} />
            <button onClick={handleSubmit}>
                <span>Add</span>
            </button>
        </div>
        <UnOrdered items={items} />
        </>
    )
}

export default Form;