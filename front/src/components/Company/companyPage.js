import React, { useState } from 'react'
import CompanyLeftBar from './companyLeftBar';
import CompanyHeader from './companyHeader';
import { useParams , useHistory} from "react-router-dom";

function CompanyPage() {
    const companyName = useParams()
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();
    

    return (
        <div className="w-full h-full   mt-20 flex text-black">
         <div className="h-full w-1/5 flex "><CompanyLeftBar/></div>
         <div className="h-full w-4/5 flex flex-col"><CompanyHeader/></div>
             </div>
    )
}

export default CompanyPage
