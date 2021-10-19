import React from 'react'
import { Business } from '@material-ui/icons'
import { useHistory } from 'react-router';

function CompanyHeader() {
  const history = useHistory();
    return (
        <div className="text-black bg-white w-full shadow-sm h-20 flex items-center justify-around">
          <div className="hover:text-yellow-600 cursor-pointer flex flex-col items-center" onClick={()=>{history.push("/company/createcompany")}}> <Business/><p >Yeni bir şirket ekle</p></div> 
          <div className="hover:text-yellow-600 cursor-pointer flex flex-col items-center" onClick={()=>{history.push("/company")}}> <p >Şirketlerim</p></div>   
          
        </div>
    )
}

export default CompanyHeader
