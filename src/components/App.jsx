import React, {useState} from "react";

function App() {

    const [BgColor, setBgColor] = useState(false)
    const [name, setName] = useState(
        {
            firstName: "",
            lastName: ""
        }
    );
    const [newName, setNewName] = useState("")


    function changeBgColor() {
        setBgColor(true)
    }

    function changeBack() {
        setBgColor(false)
    }

    function nameFunction(event) {
        var newValue = event.target.value;
        var checkName = event.target.name;

        setName((previousValue) => {
            if(checkName === "fname") {
                return {
                    firstName: newValue,
                    lastName: previousValue.lastName
                }
            } else if(checkName === 'lname') {
                return {
                    firstName: previousValue.firstName,
                    lastName: newValue
                }
            }
        })

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
            
            {/* <h1>{newName === "" ? "Hello" : `Hello, ${newName}`}</h1> */}
            {newName ? <h1>Hello, ({newName.firstName} {newName.lastName})</h1> : <h1>Hello</h1>}
            {/* <h1>Hello {firstName} {lastName}</h1> */}
            <form onSubmit={theFunction}>
                <input name="fname" onChange={nameFunction} type="text" placeholder="What's your first name?" />
                <input name="lname" onChange={nameFunction} type="text" placeholder="What's your last name?" />
                <button 
                    style={{backgroundColor: BgColor ? "black" : "white"}} 
                    onMouseOver={changeBgColor}
                    onMouseOut={changeBack} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
