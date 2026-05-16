import React, { useContext } from "react";
import { UserContext } from "./UseCon";

function Blog(){
    const uName=useContext(UserContext)
    return(
        <React.Fragment>
            <h1>{uName}</h1>
        <h1>Blog</h1>
        </React.Fragment>
    )
}
export default Blog;