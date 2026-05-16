import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate=useNavigate()

    const handlego= ()=>{
        navigate("/")
    }
    return (
        <>
            <div>
                <h2>OOPS! Not Found</h2>
                <button onClick={handlego}>Go To Home</button>
            </div>

        </>
    )
}