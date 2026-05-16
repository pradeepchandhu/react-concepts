
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <>
            <div  className="row">
                {users.map((user) => {
                    return (
                        <div className="col-md-3" key={users.id}>
                            <Link to={`/users/${user.id}`}>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>

        </>
    )
}