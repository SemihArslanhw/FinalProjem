import React from 'react'
import Header from '../components/Headers/header'
import Loginn from "../components/Auth/login"

function Login() {
    return (
        <div className="flex flex-col items-center">
        <div className=" flex flex-col w-full h-screen items-center">
        <Header/>
        <Loginn></Loginn>
        
        
            
        </div> 
        
           
        </div>
    )
}

export default Login
