import React, {useState} from "react";
import Header from "./Header"
import notes from "../list"
import Note from "./notes";



function App() {

    const [begin, setBegin] = useState(0);

    function increase() {
        setBegin(begin + 1)
    }

    function decrease() {
        setBegin(begin - 1)
    }

    return (
        <div>
            <Header />
            <div className="main">
                <h1>{begin}</h1>

                    <button onClick={increase}>+</button>
                    <button onClick={decrease}>-</button>
                    
            </div>
            <footer />
        </div>
    )
}


export default App;