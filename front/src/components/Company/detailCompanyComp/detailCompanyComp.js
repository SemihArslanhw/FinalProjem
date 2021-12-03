import React, { useEffect } from 'react'


function DetailCompanyComp({Branch}) {
    useEffect(() => {
        console.log(Branch)
        
    }, [Branch])
    return (
        <div className="cursor-pointer w-full flex flex-col justify-center hover:bg-gray-100 bg-white border-2 h-20 text-black">
        <p className="h-1/4 text-center">{Branch.BranchName}</p>    
        <div className="container h-3/4 p-3 flex items-center ">
            <p>{Branch._id}</p>
            <p className="ml-auto left-full">{Branch.BranchAddressCity} / {Branch.BranchAddressdistrict}</p></div>
        </div>
    )
}

export default DetailCompanyComp;
