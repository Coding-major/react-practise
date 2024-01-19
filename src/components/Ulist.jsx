import React from "react";

function UnOrdered(props) {

    const { items , trigger} = props;
    
    return (
        <div>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}><input key={index}  type="checkbox" onClick={() => {
                        trigger(index)
                    }} /> {item}</li>
                })}
            </ul>
        </div>
    )
}

export default UnOrdered;

