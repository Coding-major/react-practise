import React, {useState} from "react";

function App() {

    const [BgColor, setBgColor] = useState(false)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [newName, setNewName] = useState("")


    function changeBgColor() {
        setBgColor(true)
    }

    function changeBack() {
        setBgColor(false)
    }

    function myFunction1(event) {
        setFirstName(event.target.value)

        console.log(event.target.value)
    }

    function myFunction2(event) {
        setLastName(event.target.value)

        console.log(event.target.value)
    }

    function theFunction(event) {
        setNewName(firstName +" " + lastName)
        // if(name === "") {
        //     setNewName("")
        // } else {
        //     setNewName(`Hello, ${name}`)
        // }
        event.preventDefault()
    }

    return (
        <div className="container">
            
            {/* <h1>{newName === "" ? "Hello" : `Hello, ${newName}`}</h1> */}
            <h1>{newName}</h1>
            {/* <h1>Hello {firstName} {lastName}</h1> */}
            <form onSubmit={theFunction}>
                <input onChange={myFunction1} type="text" placeholder="What's your first name?" />
                <input onChange={myFunction2} type="text" placeholder="What's your last name?" />
                <button 
                    style={{backgroundColor: BgColor ? "black" : "white"}} 
                    onMouseOver={changeBgColor}
                    onMouseOut={changeBack} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
