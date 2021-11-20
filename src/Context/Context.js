import { createContext, useState } from "react";
import React from 'react'

export const Cartcontext =createContext();

const Context = ({children}) => {
const [cartprod,setCartprod]=useState([]);
    return (
  
            <Cartcontext.Provider value={{cartprod,setCartprod}}>
                {children}
            </Cartcontext.Provider>

    )
}

export default Context;
