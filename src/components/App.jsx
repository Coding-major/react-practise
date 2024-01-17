import React, {useState} from "react";

function App() {

    const [BgColor, setBgColor] = useState(false)
    const [name, setName] = useState("");
    const [newName, setNewName] = useState("")


    function changeBgColor() {
        setBgColor(true)
    }

    function changeBack() {
        setBgColor(false)
    }

    function myFunction(event) {
        setName(event.target.value)
        console.log(event.target.value)
    }

    function theFunction(event) {
        setNewName(name)
        // if(name === "") {
        //     setNewName("")
        // } else {
        //     setNewName(`Hello, ${name}`)
        // }
        event.preventDefault()
    }

    return (
        <div className="container">
            <h1>{newName === "" ? "Hello" : `Hello, ${newName}`}</h1>
            {/* <h1>{newName}</h1> */}
            <form onSubmit={theFunction}>
                <input onChange={myFunction} type="text" placeholder="What's your name?" />
                <button 
                    style={{backgroundColor: BgColor ? "black" : "white"}} 
                    onMouseOver={changeBgColor}
                    onMouseOut={changeBack} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
