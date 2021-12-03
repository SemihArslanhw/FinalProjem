import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as api from "../../api/index";
import DetailComponent from "./detailComponent";

function CompanyDetailsComps({setCreateBranch}) {

    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const [company, setCompany] = useState();
    const [loading, setLoading] = useState(true)
    

    const companyName = useParams().companyname;    
    useEffect(() => {
       
        getCompany();    

        },[])
       
        const getCompany = async() => {
            try {
                 await api.getCompanyByCompanyName(companyName)
                 .then((res)=>{
                    res.data.map((resdat)=>{
                       setCompany(resdat);
                    })
                 })              
                 setLoading(false);
                 
            } catch (error) {
                setLoading(false);
                console.log(error)
            } 
        }
    return (
        <div className="text-black w-screen h-screen">
            {loading ? <div class="bg-white w-full mt-20 p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
      <div class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse" ></div>
      <div class="flex flex-col flex-1 gap-5 sm:p-2">
        <div class="flex flex-1 flex-col gap-3">
          <div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" ></div>
          <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
        </div>
        <div class="mt-auto flex gap-3">
          <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
          <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
          <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto" ></div>
        </div>
      </div>
</div> :  <DetailComponent setCreateBranch={setCreateBranch} company={company}/>}
        </div>
    )
}

export default CompanyDetailsComps
