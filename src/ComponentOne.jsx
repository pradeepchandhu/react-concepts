import React from "react";

 function ComponentOne({count1, handleCountOne}){
        console.log("component one called")
    return(
        <>
        <div>
            <h1>{count1}</h1>
            <button onClick={handleCountOne}>Count1</button>
        </div>
        </>
    )
}
export default React.memo(ComponentOne)