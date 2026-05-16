import React, { useState } from "react";

export default function Home() {
    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    const [error, setError] = useState({})

    const validation = () => {
        let txtErr = {}
        if (!user.name) {
            txtErr.name = "please enter a name"
        }
        if (!user.email) {
            txtErr.email = "please enter an email"
        }
        setError(txtErr)
        return Object.keys(txtErr).length === 0

    }

    const handleChange = (e) => {

        setUser({ ...user, [event.target.name]: event.target.value })
        setError({ ...error, [event.target.name]: "" })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!validation()) return
        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)


        })
        setUser({
            name: "",
            email: ""
        })
    }
    return (
        <>
            <div>Home</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={user.name} name="name" onChange={handleChange} />
                    {error.name && <p style={{color:"red"}}>{error.name}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email"  value={user.email} name="email" onChange={handleChange} />
                    {error.name && <p style={{color:"red"}}>{error.name}</p>}
                </div>
                <input type="submit" />
            </form>
        </>
    )
}