import React, { useCallback, useContext, useState } from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";
import { UserContext } from "./UseCon";
export default function One(){
    const uName=useContext(UserContext);
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
    const [name,setName]=useState("Pradeep");

    const handleCountOne= useCallback(()=>{
        setCount1(count1+1);
    },[count1])
    const handleCountTwo=useCallback(()=>{
        setCount2(count2+1);
    },[count2])
    return(
        <>
        <div >
            {uName}
            <h2>from one</h2>
        </div>
        <div>
            <ComponentOne count1={count1} handleCountOne={handleCountOne}/>
            <ComponentTwo count2={count2} handleCountTwo={handleCountTwo}/>
            <ComponentThree name={name} />
        </div>
        </>
    )
}