import React, { useEffect } from 'react'


function DetailCompanyComp({Branch}) {
    useEffect(() => {
        console.log(Branch)
        
    }, [Branch])
    return (
        <div className="cursor-pointer w-full flex justify-center hover:bg-gray-100 bg-white border-2 h-20 text-black">
        <p>{Branch.BranchName}</p>    
        </div>
    )
}

export default DetailCompanyComp;
