import React, { useState } from "react";
import Child from "./Child";
export default function Parent(){
    const [name,setName]=useState("Pradeep")
    return(
        <>
        <div>
            <Child />
        </div>
        </>
    )
}