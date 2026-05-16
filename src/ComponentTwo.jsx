import React from "react";
function ComponentTwo({count2 ,handleCountTwo}){
    console.log("component two called")
    return(
        <>
        <div>
            <h1>{count2}</h1>
            <button onClick={handleCountTwo}>Count2</button>
        </div>
        </>
    )
}
export default React.memo(ComponentTwo)
