import React, { useContext, useMemo, useState } from "react";
import { UserContext } from "./UseCon";
export default function Two(){
    const uNametwo=useContext(UserContext)
    const [count1,setCount1]=useState(0)
     const [count2,setCount2]=useState(0)
    const handleCount =()=>{
        setCount1(count1+1)
    }
    const square = useMemo(()=>{
        console.log("square called")
        return count1*count1;
    },[count1])
    const handleCount2 =()=>{
        setCount2(count2+1)
    }
    return(
        <>
        <div>{uNametwo}
            <h2>from two</h2>
        </div>
        <div>
            <h1>{count1}</h1>
            <h3>{square}</h3>
            <button onClick={handleCount}>Count1</button>
              <h1>{count2}</h1>
            <button onClick={handleCount2}>Count2</button>
        </div>
        </>
    )
}