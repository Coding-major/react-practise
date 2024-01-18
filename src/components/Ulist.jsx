import React from "react";
import Todo from "./TodoList";

function UnOrdered(props) {

    const { items } = props;
    return (
        <div>
            <ul>
                {items.map((eachItem, index) => {
                        return <Todo key={index} name={eachItem}/>
                })}
            </ul>
        </div>
    )
}

export default UnOrdered;

