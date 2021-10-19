import React, { useEffect, useRef, useState } from 'react'
import Data from "../../iller.json"
import { Search } from "@material-ui/icons"

function CompanyLeftBar() {
    const search = useRef();
    const districtSearch = useRef();
    const [searchBar , setSearchBar] = useState(false);
    const [districtBar , setDistrictBar] = useState(false);
    const [filteredCity , setFilteredCity] = useState([]);
    const [selectedCity , setSelectedCity] = useState();
    const [filteredDistrict , setFilteredDistrict] = useState();
    const [selectedDistrict , setSelectedDistrict] = useState();
    const [searchedDistrict , setSearchedDistrict] = useState()
    
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
    const Searchh = () =>{
        console.log(search.current.value , districtSearch.current.value)
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
    useEffect(()=>{
     console.log(selectedCity);
    },[selectedCity])
   
    return (
        <div className=" fixed flex flex-col h-full w-1/5 items-center shadow text-black">
          <p> Şehir </p>
          <div className="flex flex-col border-2 border-gray-600 rounded-lg w-3/4 h-10 items-center justify-center">
              
              <input ref={search} className=" w-full h-2/3 px-2 outline-none" placeholder="İsteğe Bağlı" onChange={SearchAlgorythm} ></input>
            
          </div>
          {searchBar && <div className="z-50 bg-white absolute   overflow-y-scroll h-1/3 w-3/4 mt-16 border-2 border-black">
                  {filteredCity?.map((data)=>{
                     return (<p onClick={()=>{setFilteredDistrict(data.ilceleri);console.log(data.ilceleri); setSearchBar(false);districtSearch.current.value = ""; search.current.value = data.il}} className="cursor-pointer hover:bg-gray-400 text-black">{data.il}</p>)
                  })}
                  </div>}
                  <p> İlçe </p>
          <div className="flex flex-col border-2 border-gray-600 rounded-lg w-3/4 h-10 items-center justify-center">
              
              <input ref={districtSearch} className=" w-full h-2/3 px-2 outline-none" placeholder="İsteğe Bağlı" onChange={DistrictAlgorythm} ></input>
            
          </div>
          {districtBar && <div className="absolute text-black mt-32  overflow-y-scroll h-1/3 w-3/4 z-50 bg-white  border-2 border-black">
                  {searchedDistrict.map((data)=>{
                     return (<p onClick={()=>{setSelectedDistrict(data);console.log(filteredDistrict); setDistrictBar(false); districtSearch.current.value = data}} className="cursor-pointer hover:bg-gray-400 text-black">{data}</p>)
                  })}
                  </div>}
                  <button className="text-black bg-green-600 rounded-md w-3/4 h-8 mt-4 hover:bg-green-400 " type="submit" onClick={Searchh}>Ara</button>
        </div>
    )
}

export default CompanyLeftBar
