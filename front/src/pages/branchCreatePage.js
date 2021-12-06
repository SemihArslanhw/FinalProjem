import React from 'react'
import CreateBranch from '../components/Branch/CreateBranch'
import Header from '../components/Headers/header'

function BranchCreatePage() {
    return (
        
        <div className="flex flex-col text-black w-full h-full ">
            <Header/>
            <CreateBranch/>
        </div>
    )
}

export default BranchCreatePage
