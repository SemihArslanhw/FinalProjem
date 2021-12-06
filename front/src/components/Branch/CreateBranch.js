import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router';
import Data from "../../iller.json"
import { Close } from '@material-ui/icons';
import { Image } from '@material-ui/icons';

function CreateBranch() {
    const link = useParams();
    const search = useRef();
    const districtSearch = useRef();
    const branchName = useRef();
    const branchAddress = useRef();
    const branchPhone = useRef();
    const branchAddressCity = useRef();
    const branchAddressdistrict = useRef();
    const [branchImage , setBranchImage] = useState(null);
    const [searchBar , setSearchBar] = useState(false);
    const [districtBar , setDistrictBar] = useState(false);
    const [filteredCity , setFilteredCity] = useState([]);
    const [selectedCity , setSelectedCity] = useState();
    const [filteredDistrict , setFilteredDistrict] = useState();
    const [selectedDistrict , setSelectedDistrict] = useState();
    const [searchedDistrict , setSearchedDistrict] = useState();
    const companyname = link.companyname;
    useEffect(()=>{
        console.log(selectedCity);
       },[selectedCity])

    const SearchAlgorythm = () =>{
        setSearchBar(true);
      const searchText = search.current.value
      setFilteredCity(
          Data.filter((value)=>{
           if(searchText === ""){
               setSearchBar(false);
               
               return value;
           }else if(
               value.il.toLowerCase().includes(searchText.toString().toLowerCase()) 
            
           ){return value}

          })
      )
    
      console.log(filteredCity)


    }

    const DistrictAlgorythm = () =>{
        
        setDistrictBar(true);
        const DistrictText = districtSearch.current.value
        setSearchedDistrict(
         filteredDistrict?.filter((value)=>{
             
          if(DistrictText === ""){
              setDistrictBar(false);
              return value;
          }else if(
              
              value.toLowerCase().includes(DistrictText.toString().toLowerCase())
          ){return value}
             
         })
 
        )
        console.log(searchedDistrict);
       
 
     }
    return (
        <div className="pt-20 justify-between sm:flex-row items-center flex-col gap-5 flex w-full h-full top-20">
         {/* City Select Component */}
           <div className=" flex flex-col h-full sm:ml-14 w-1/5  items-center text-black">
          <p> Şehir </p>
          <div className="flex flex-col border-2 border-gray-600 rounded-lg w-52 h-10 items-center justify-center">
              
              <input ref={search} className=" w-full h-2/3 px-2 outline-none" placeholder="Zorunlu" onChange={SearchAlgorythm} ></input>
            
          </div>
          {searchBar && <div className="z-50 bg-white absolute   overflow-y-scroll h-1/3 w-52 mt-16 border-2 border-black">
                  {filteredCity?.map((data)=>{
                     return (<p onClick={()=>{setFilteredDistrict(data.ilceleri);console.log(data.ilceleri); setSearchBar(false);districtSearch.current.value = ""; search.current.value = data.il}} className="cursor-pointer hover:bg-gray-400 text-black">{data.il}</p>)
                  })}
                  </div>}
                  <p> İlçe </p>
          <div className="flex flex-col border-2 border-gray-600 rounded-lg w-52 h-10 items-center justify-center">
              
              <input ref={districtSearch} className=" w-full h-2/3 px-2 outline-none" placeholder="Zorunlu" onChange={DistrictAlgorythm} ></input>
            
          </div>
          {districtBar && <div className="absolute text-black mt-32  overflow-y-scroll h-1/3 w-52 z-50 bg-white  border-2 border-black">
                  {searchedDistrict?.map((data)=>{
                     return (<p onClick={()=>{setSelectedDistrict(data);console.log(filteredDistrict); setDistrictBar(false); districtSearch.current.value = data}} className="cursor-pointer hover:bg-gray-400 text-black">{data}</p>)
                  })}
                  </div>}

        </div>
        {/* Branch Component */}
        <div className="flex flex-col sm:flex-row container rounded-xl shadow-lg w-3/5 h-96 items-center">
           <input type="file" id="branchImg" onChange={(e) => setBranchImage(e.target.files[0])} className="hidden"></input>
           {!branchImage ? <label htmlFor="branchImg" className="cursor-pointer transition-all   bg-gradient-to-b from-blue-600  w-full h-2/5 rounded-t-xl flex items-center justify-center"><Image fontSize="large"/> </label> :
            <div className=" w-full h-2/5 "  >
                <Close className="text-white ml-1 absolute cursor-pointer transition-all transform hover:scale-150 " onClick={()=>{setBranchImage(null)}}/>
                <img className="w-full h-full object-fill  rounded-t-xl " src={URL.createObjectURL(branchImage)}></img>
                
                </div>}
            </div>
        </div>
    )
}

export default CreateBranch
