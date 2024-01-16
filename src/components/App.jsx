import React, {useState} from "react";
import Header from "./Header"




function App() {

    var newTime = new Date().toLocaleTimeString()

    const [currentTime, setCurrentTime] = useState(newTime);


    function time() {
        setCurrentTime(newTime)
    }

    return (
        <div>
            <Header />
            <div className="main">
                <h1>{currentTime}</h1>
                <div>
                    <button onClick={time}>currentTime</button>
                </div>
            </div>
            <footer />
        </div>
    )
}


export default App;