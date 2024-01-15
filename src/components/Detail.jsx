import React from "react";

function Detail(props) {
    return (
        <div>
            <p>{props.color}</p>
            <p>{props.expire}</p>
        </div>
    )
}

export default Detail;