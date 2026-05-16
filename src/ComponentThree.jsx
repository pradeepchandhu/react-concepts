import React from "react";
 function ComponentThree({name}){
        console.log("name called")
    return(
        <>
        <div>
            <h1>{name}</h1>
        </div>
        </>
    )
}
export default React.memo(ComponentThree)