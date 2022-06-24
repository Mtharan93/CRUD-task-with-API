import React, { useEffect, useState } from "react";
import DeleteUsers from "./DeleteUsers";
import EditUsers from "./EditUsers";

function ListUsers() {

    const [data, setData] = useState([]);
 
    const apiGet = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setData(json);
            });
    };
    useEffect(() =>{
        apiGet();
    }, [])
    

    return(
        <div>
            <div>
                <ul>
                    {data.map(item =>
                       <li className="list-class" key={item.id}>
                        <div className="func-btn">
                        <EditUsers/>
                        <DeleteUsers/>
                        </div>
                        <b>{item.title}</b><br/>
                       {item.body}</li> )}
                </ul>
            </div>
        </div>
    );
}

export default ListUsers;