import React from 'react'
import { useEffect , useState} from 'react';
import * as api from '../../api/index';
import { useParams , useHistory } from "react-router-dom";
import ProductsPage from './BranchComponents/ProductsPage';
import Map from "../map"

function BranchPage() {
    const history = useHistory();
    const PF = "http://localhost:8800/images/";
    const [branch, setBranch] = useState();
    const params = useParams().branchname;
    const companyname = useParams().companyname;
    const [pins , setPins] = useState();
    const [branchLoading, setBranchLoading] = useState(true);
    const [porductsPage , setPorductsPage] = useState(true);
    const [text , setText] = useState("");

    useEffect(()=>{
       const getBranchByBranchNameF = async () => {
        try {
        const res = await api.getBranchByBranchName(params);
        const pinres = await api.getPinByBranchName(res.data.BranchName)
        const respin = pinres.data[0]
        setPins(respin)
        console.log(res.data);
        setBranch(res.data);
        setBranchLoading(false);
        } catch (error) {
            setBranchLoading(false);
            console.log(error);
        }
       }
       getBranchByBranchNameF();
    },[])

   

    return (
        <div className="container m-auto mt-10 ">
            <div className="w-full h-40 rounded-sm ">
                <div className='w-full px-4 bg-gray-400 items-center flex justify-between h-3/5 border border-gray-400 rounded-t-sm'>
                 <img className='w-20 h-20 rounded-full border object-fill border-black' src={PF + branch?.BranchImage}></img> 
                 <div className='h-full mb-5 transition-all cursor-pointer border-b-2 border-gray-400 hover:border-blue-600 text-white flex flex-col justify-around'>
                     <p>{branch?.BranchName}</p> 
                     <p onClick={()=>history.push("/company/"+companyname)} className='text-center'>{companyname}</p>
                 </div>
                  
                </div>
                <div className="w-full justify-between gap-5 p-3 items-center flex h-2/5 border-b border-r border-l border-gray-400   rounded-b-md">
                 <div className='gap-5 items-center flex '> <p onClick={()=>setPorductsPage(true)} className='h-full transition-all cursor-pointer mt-2 border-b-2 border-white hover:border-red-300'>Mağaza İçeriği</p>
                    <p onClick={()=>setPorductsPage(false)} className='h-full transition-all mt-2 cursor-pointer border-b-2 border-white hover:border-red-300'>Mağaza Konumu</p>
                  </div>   
                   <input type="text" value={text} onChange={(e)=>setText(e.currentTarget.value)} className='p-3 border-2 border-yellow-500 rounded-lg outline-none' type="text" placeholder='Mağaza İçerisinde Arama Yap'></input>
                </div>
            </div>
            <div className='mt-5'>
              
              {branchLoading ? <div class="flex justify-center  items-center">
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
          : 
          porductsPage ? <ProductsPage  text={text}  branch={branch}/>:<div className='h-96 w-full'><Map pins={pins}/></div>} 
               </div> 
        </div>
    )
}

export default BranchPage
