import React, { useEffect } from 'react'
import * as api from "../../../api/index"
import { useParams , useHistory} from "react-router-dom";

function DetailCompanyComp({Branch , company}) {
    const PF = "http://185.136.160.132/images/";
    const history = useHistory();
    
    console.log(Branch)

    return (
        <div onClick={()=>{history.push("/company/" + company + "/" + Branch.BranchName)}} className="cursor-pointer w-full flex flex-col justify-center hover:bg-gray-100 bg-white border-2 h-20 text-black">
        <p className="ml-4 text-center">{Branch.BranchName}  </p>  
        <div className="container h-3/4 p-3 flex items-center ">
            <img className=" object-fill rounded-xl h-16 mb-6 w-1/4 " src={PF + Branch.BranchImage}></img>
            <p className="ml-auto left-full">{Branch.BranchAddressCity} / {Branch.BranchAddressdistrict}</p></div>
        </div>
    )
}

export default DetailCompanyComp;
