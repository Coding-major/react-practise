import React, {useState} from "react";


function Todo(props) {
    var [srikeThrough, setStrikeThrough] = useState(false)

    function changeStrike () {
        setStrikeThrough((previousValue) => {
            if(previousValue === false) {
                return true
            } else if (previousValue === true) {
                return false
            }
        })
    }
    return <li onClick={changeStrike} style={{textDecoration: srikeThrough ? "line-through" : null}}>{props.name}</li>
}

export default Todo;