
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetails(){
    const [users,setUsers]=useState([])

    let {id} =useParams()

     useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return(
        <>
        <div>
            <h2>{users.name}</h2>
            <h3>{users.phone}</h3>
        </div>
        </>
    )
}