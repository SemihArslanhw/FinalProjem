import React from 'react'
import BranchPage from '../components/Branch/BranchPage'
import Header from "../components/Headers/header"



function Company() {
     
    

    return (
        <div className="text-black flex flex-col h-full w-full">
            <Header/>
            <div className="w-full mt-20 ">
                <BranchPage/>
            
            </div>
            
        </div>
    )
}

export default Company