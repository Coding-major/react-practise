import React, {useState} from "react";

function App() {

    const [BgColor, setBgColor] = useState(false)
    const [contact, setContact] = useState(
        {
            firstName: "",
            lastName: "",
            email: ""
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
        var {name, value} = event.target

        setContact((previousValue) => {
            if (name === 'fname') {
                return {
                    firstName: value,
                    lastName: previousValue.lastName,
                    email: previousValue.email
                }
            } else if (name === "lname") {
                return {
                    firstName: previousValue.firstName,
                    lastName: value,
                    email: previousValue.email
                }
            } else if (name === "email") {
                return {
                    firstName: previousValue.firstName,
                    lastName: previousValue.lastName,
                    email: value
                }
            }
        })

        console.log(event.target.value)
    }

    function theFunction(event) {
        setNewName(contact)
        // if(name === "") {
        //     setNewName("")
        // } else {
        //     setNewName(`Hello, ${name}`)
        // }
        event.preventDefault()
    }

    return (
        <div className="container">
            <form onSubmit={theFunction}>
                {newName.firstName || newName.lastName ? <h1>Hello, {newName.firstName} {newName.lastName}</h1> : <h1>Hello, Welcome</h1>}
                <p>{newName.email}</p>
                <input name="fname" onChange={nameFunction} type="text" placeholder="What's your first name?" value={newName.firstName}/>
                <input name="lname" onChange={nameFunction} type="text" placeholder="What's your last name?" value={newName.lastName}/>
                <input name="email" type="text" onChange={nameFunction} placeholder="email?" value={newName.email} />
                <button 
                    style={{backgroundColor: BgColor ? "black" : "white"}} 
                    onMouseOver={changeBgColor}
                    onMouseOut={changeBack} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
