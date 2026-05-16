import React, { useContext } from "react";
import { UserContext } from "./UseCon";
export default function SubChild(){
    const uName= useContext(UserContext)
    return(
        
        <>
        <div>
            <h1>{uName}</h1>
            <h2>from subchild to child to parent</h2>
        </div>
        </>
    )
}