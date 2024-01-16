import React, {useState} from "react";
import Header from "./Header"
import cars from "../cars";

 function App() {   

    return ( 
        <div>
            <Header />
            <div className="main">

                <table style={{border: '1px solid red'}}>
                    <thead style={{border: '1px solid red'}}>
                        <th>model</th>
                        <th>color</th>
                        <th>topSpeed</th>
                    </thead>
                    <tbody>
                        {cars.map((eachCar) => {
                            return (
                                <tr>
                                    <td style={{border: '1px solid red'}}>{eachCar.model}</td>
                                    <td style={{border: '1px solid red'}}>{eachCar.coloursByPopularity[0]}</td>
                                    <td style={{border: '1px solid red'}}>{eachCar.speedStats.topSpeed}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
            <footer />
        </div>
    )
}


export default App;