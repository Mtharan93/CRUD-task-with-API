import React, {useState } from "react";

function EditUsers() {

    const [inputs, setInputs] = useState({});

    //Put Method
    const apiPut = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                title: inputs.title,
                body: inputs.body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setInputs(json);
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
        apiPut();
        console.log(inputs);
    }

    return (
        <div>
            <form className="editfield" onSubmit={handleSubmit}>
                <button onClick={apiPut} className="update-btn" type="submit" value="submit" onChange={handleonChange} >Update</button>
            </form>
        </div>
    );
}

export default EditUsers;