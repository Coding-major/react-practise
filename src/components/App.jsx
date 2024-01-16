import React from "react";
import Header from "./Header"
import notes from "../list"
import Note from "./notes";


function App() {
    return (
        <div>
            <Header />
            <div className="main">
                {notes.map((note) => {
                    return <Note title={note.title} content={note.content} />
                })}
            </div>
            <footer />
        </div>
    )
}


export default App;