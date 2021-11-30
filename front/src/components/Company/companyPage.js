import React, { useState , useEffect } from 'react'
import CompanyLeftBar from './companyLeftBar';
import CompanyHeader from './companyHeader';
import { useParams , useHistory} from "react-router-dom";
import CompanyCard from './companyCard';
import * as api from "../../api/index";

function CompanyPage() {
    const companyName = useParams()
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();
    const [companys, setCompanys] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    const getCompany = async() => {
        try {
             const company = await api.getCompanyByAuthor(user.result.email);
             setLoading(false);
             setCompanys(company?.data);
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
       
        
    }
    getCompany();    
    },[])
    return (
        <div className="w-full h-full flex flex-col text-black">
        <div className="w-full h-full   mt-20 flex text-black">
         <div className="h-full w-1/5 flex "><CompanyLeftBar/></div>
         <div className="h-full w-4/5 flex flex-col">
             <CompanyHeader/>
             <div className="w-full h-full mt-10 flex flex-col items-center ">
         {loading ? <div class="bg-white w-full  p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
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
</div> : 
           
            companys?.map((company,i) => {
                   
                        return <CompanyCard key={i} loading={loading} company={company}/>
                    
                })
         }

           </div>
         </div>
        
         </div>
        
         </div>
    )

    }
export default CompanyPage
