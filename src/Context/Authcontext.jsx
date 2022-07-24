import React from "react";
import { createContext } from "react";

const Authcontext=createContext();

const AuthcontextProvider=({children})=>{
    return(
        <Authcontext.Provider value={"abcde"}>{children}</Authcontext.Provider>
    )
}


export {Authcontext,AuthcontextProvider};