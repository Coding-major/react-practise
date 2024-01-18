import React, {useState} from "react";
import Form from "./Form";
import UnOrdered from "./Ulist";



function App() {

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
    <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <Form onChange={handleChange} onSubmit={handleSubmit} value={theInput}/>
        <UnOrdered items={items}/>
        
        
    </div>
    );
}

export default App;
