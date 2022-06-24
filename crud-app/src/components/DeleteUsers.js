import React, { useState } from "react";

function DeleteUsers() {

    const [inputs, setInputs] = useState({});

    //Delete Method
    const apiDelete = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        });
    };

    const handleonChange = (event) => {
        event.persist();
        setInputs((inputs) => ({
            ...inputs,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        apiDelete();
        console.log(inputs);
    }

    return (
        <div>
            <form className="editfield" onSubmit={handleSubmit}>
                <button onClick={apiDelete} className="delete-btn" value="submit" onChange={handleonChange} >delete</button>
            </form>
            {/* {JSON.stringify(inputs)} */}
        </div>
    );
}

export default DeleteUsers;