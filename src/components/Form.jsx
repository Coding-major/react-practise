import React from "react";

function Form(props) {

    const {onChange, onSubmit, value} = props

    return (

        <div className="form">
            <input type="text" onChange={onChange} value={value} />
            <button onClick={onSubmit}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default Form;