import React, { useState } from "react";

function AddUsers() {

    const [inputs, setInputs] = useState({});

    //Post Method
    const apiPost = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
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
        apiPost();
        console.log(inputs);
    }

    return (
        <div>
            <form className="fieldset" onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Enter title" onChange={handleonChange} />
                <textarea type="text" name="body" placeholder="Content goes here...." onChange={handleonChange} />
                <input className="submit-btn" type="submit" value="submit" onChange={handleonChange} />
            </form>
            {/* <pre className="inputs-data">{JSON.stringify(inputs, null, 2)}</pre> */}
        </div>
    );
}

export default AddUsers;