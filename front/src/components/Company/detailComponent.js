import React, { useEffect, useState } from 'react'
import moment, { localeData } from "moment";
import 'moment/locale/tr'
import Map from '../map';
import * as api from "../../api/index";

function DetailComponent({ company }) {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  const PF = "http://localhost:8800/images/";
  const [pinloading, setPinLoading] = useState(true);
  const [pins, setPins] = useState([]);
  moment.locale("tr");

  useEffect(() => {
    const getPinsByCompany = async () => {
      
          try {
      const pins = await api.getPinByCompanyId(company._id);
      setPins(pins.data);
      setPinLoading(false);
     } catch (error) {
       setPinLoading(false);
       console.log(error);
     }
        
    }
    
      getPinsByCompany();
   
  }, [])
  
  if(pinloading === false && company === undefined){
    return <div className="mt-20 text-black">Böyle bir şirket bulunamadı</div>
  }

  

  return (
    <div className="container m-auto w-full  mt-20  font-bold text-base text-black">
      <div class="bg-white w-full  p-2 sm:p-4 sm:h-80 rounded-2xl shadow-md flex flex-col sm:flex-row gap-5 select-none ">
        <img src={PF + company?.BackTopİmage} class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 " ></img>
        <div class="flex flex-col flex-1 gap-5 sm:p-2">
          <div class="flex mt-10 flex-1 flex-col gap-3 items-center">
            <img src={PF + company?.Companyimage} class="bg-gray-200 w-14 h-14 rounded-2xl" ></img>
            <div class=" w-full m-1 h-3 rounded-2xl" >Şirket ismi : {company?.CompanyName}</div>
            <div class=" w-full m-1 h-3 rounded-2xl" >Şirket Açıklaması:{company?.Description}</div>
            <div class=" w-full m-1 h-3 rounded-2xl" >Şirket E-Postası:{company?.Email}</div>
            <div class=" w-full m-1 h-3 rounded-2xl" >Şirket Adresi:{company?.Address}</div>
          </div>
          <div class="mt-auto flex gap-3">

            <div class=" w-30 h-8  rounded-full ml-auto justify-center flex" >Şirket {moment(moment(company?.createdAt).format("DD/MM/YYYY"), "DD/MM/YYYY").fromNow()} eklendi</div>
          </div>
        </div>
      </div>
      {/* BOTTOM SECTION */}
      <div className="w-full flex container m-auto gap-5 mt-5">
        <div className="w-1/2 flex justify-center container m-auto bg-gray-400 h-96 ">
        {pinloading ? <div class="flex justify-center  items-center">
            <div
              class="
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-4 border-b-4 border-purple-500
    "
            ></div>
          </div>
            : <Map pins={pins}></Map>
          }
        </div>
        <div className="w-1/2 container m-auto bg-gray-400 h-96 ">
          
        </div>
      </div>
    </div>
  )
}

export default DetailComponent
