import React from "react";
import Header from "./Header"
import Fruit from "./Fruits";
import fruitList from "../fruits"

function createFruit(eachFruit) {
    return <Fruit id={eachFruit.id} key={eachFruit.id} name={eachFruit.name} link={eachFruit.img} expire={eachFruit.expireDate} color={eachFruit.color} />
}

function App() {
    return (
        <div>
            <Header />
            {fruitList.map(createFruit)}
        </div>
    )
}


export default App;