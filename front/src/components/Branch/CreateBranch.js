import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router';
import Data from "../../iller.json"
import { Close } from '@material-ui/icons';
import { Image } from '@material-ui/icons';
import RequiredInfcomp from '../Company/creatingCompanycomp/requiredInfcomp';
import * as api from "../../api/index"
import ReactMapGL, { Marker , Popup} from 'react-map-gl';
import {Room} from "@material-ui/icons";
import { useHistory } from 'react-router';

function CreateBranch() {
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();
    const link = useParams();
    const search = useRef();
    const districtSearch = useRef();
    const branchName = useRef();
    const branchAddress = useRef();
    const branchPhone = useRef();
    const branchGoogleMaps=useRef();
    const [branchImage , setBranchImage] = useState(null);
    const [searchBar , setSearchBar] = useState(false);
    const [districtBar , setDistrictBar] = useState(false);
    const [filteredCity , setFilteredCity] = useState([]);
    const [selectedCity , setSelectedCity] = useState();
    const [filteredDistrict , setFilteredDistrict] = useState();
    const [selectedDistrict , setSelectedDistrict] = useState();
    const [searchedDistrict , setSearchedDistrict] = useState();
    const [companyid , setCompanyId] = useState();
    const companyname = link.companyname;
    const [newPlace , setNewPlace] = useState(null)

    const [viewport, setViewport] = useState({
        latitude: 39,
        longitude: 35,
        zoom:4
      });
    useEffect(()=>{
       
                const fetchData = async () => {
           try {
               const comp =await api.getCompanyByCompanyName(companyname);
               console.log(comp?.data[0]);
               setCompanyId(comp?.data[0]._id);
              if(comp?.data[0].Author !== user.result.email){
            history.push('/')
        }
           } catch (error) {
               console.log("Böyle bir şirket yok");
           }
            

        }
     fetchData();
     
       },[])

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

    const createBranch = async (e) =>{
        e.preventDefault();
        if (branchImage !== null && branchName.current.value !== "" && branchAddress.current.value !== "" && branchPhone.current.value !== "" && searchedDistrict !== null && newPlace !== null){
            const data1 = new FormData();
            const filename1 = companyname + "_" +  branchName.current.value ;
            data1.append('name', filename1);
            data1.append('file', branchImage);
            
           try {
            const res1 = await api.createPin(branchName.current.value,newPlace.longitude,newPlace.latitude);
           } catch (error) {
               console.log(error)
           }
           try {
               const res2 = await api.uploadFile(data1);
           } catch (error) {
               console.log(error)
           }
           
            try {                
                console.log(companyid,branchName.current.value,branchAddress.current.value,selectedCity,selectedDistrict,branchPhone.current.value,branchGoogleMaps.current.value,filename1,newPlace.latitude,newPlace.longitude)
                const res = await api.createBranch(companyid,branchName.current.value,branchAddress.current.value,selectedCity,selectedDistrict,branchPhone.current.value,branchGoogleMaps.current.value,filename1);
                
                
                setTimeout(() => {
                    //history.push("/company/" + comString);
                    history.push("/company/" + companyname);
                }, 1000)
               
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("You didn't add any file!");
        }
        
      
      
    
      }  
    
    const handleClick = (e) =>{
    setNewPlace(null);
    const [longitude,latitude] = e.lngLat;
    setNewPlace({
        longitude,
        latitude
    });
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
        <div className="pt-20  justify-evenly sm:flex-row items-center flex-col gap-5 flex w-full h-screen top-20">
        
        {/* Branch Component */}
        <div className="flex flex-col sm:p-4 mt-20 sm:mt-0 sm:flex-row transition-all container rounded-xl shadow-lg w-3/5 bg-gray-300 items-center">
           <input type="file" id="branchImg" onChange={(e) => setBranchImage(e.target.files[0])} className="hidden"></input>
           {!branchImage ? <label htmlFor="branchImg" className="cursor-pointer transition-all sm:rounded-xl h-60 sm:h-96 bg-blue-600  w-full  rounded-t-xl flex items-center justify-center"><Image fontSize="large"/> </label> :
            <div className=" w-full  "  >
                <Close className="text-white ml-1 absolute cursor-pointer transition-all transform hover:scale-150 " onClick={()=>{setBranchImage(null)}}/>
                <img className="w-full  h-60 object-fill sm:rounded-xl rounded-t-xl " src={URL.createObjectURL(branchImage)}></img>
                
                </div>}
              <div className="sm:flex "> 
              <div>
              <RequiredInfcomp refer={branchName} placeholder="İsim"/>
                <RequiredInfcomp refer={branchAddress} placeholder="Adres (Açıklama)"/>
                
              
              <input ref={search} className=" p-4 m-4 border-2 placeholder-gray-300 outline-none" placeholder="Şehir" onChange={SearchAlgorythm} ></input>
            
         
          {searchBar && <div className="z-50 bg-white absolute p-4 m-4 overflow-y-scroll h-1/3 w-52  border-2 border-black">
                  {filteredCity?.map((data)=>{
                      
                     return (<p onClick={()=>{setSelectedDistrict(null);setSelectedCity(data.il);setFilteredDistrict(data.ilceleri);console.log(data.ilceleri); setSearchBar(false);districtSearch.current.value = ""; search.current.value = data.il}} className="cursor-pointer hover:bg-gray-400 text-black">{data.il}</p>)
                  })}
                  </div>}
                </div>
                 <div>
                 
               
              
              <input ref={districtSearch} className=" p-4 m-4 border-2 placeholder-gray-300 outline-none" placeholder="İlçe" onChange={DistrictAlgorythm} ></input>
            
          
          {districtBar && <div className="absolute  text-black p-4 m-4 overflow-y-scroll h-1/3 w-52 z-50 bg-white  border-2 border-black">
                  {searchedDistrict?.map((data)=>{
                     return (<p onClick={()=>{setSelectedDistrict(data);console.log(filteredDistrict); setDistrictBar(false); districtSearch.current.value = data}} className="cursor-pointer hover:bg-gray-400 text-black">{data}</p>)
                  })}
                  </div>}
                  <RequiredInfcomp refer={branchPhone} placeholder="Telefon"/>
                <RequiredInfcomp refer={branchGoogleMaps} placeholder="Google Maps Link"/>
                     </div> 
                
             </div>    <button type="submit" onClick={(e)=>{createBranch(e)}} className="bg-blue-600 transition-all hover:bg-green-400 hover:text-black text-white w-full sm:rounded-xl sm:h-10 sm:w-96 h-30 rounded-b-xl flex items-center justify-center">
                    <p> Kaydet </p>
                </button>
                
            </div>
            <ReactMapGL
          {...viewport}
          transitionDuration={100}
          width="100%"
          height="100%"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          onViewportChange={(viewport) => setViewport(viewport)}
          mapStyle="mapbox://styles/semiharslanhw/cku9yduu72ch917mwngkd5uwo"
          onDblClick={(e)=>{handleClick(e)}}

          >
            {newPlace && <Popup latitude={newPlace.latitude} longitude={newPlace.longitude}  offsetTop={-10} >
                <p>Seçtiğiniz Yer Burası</p>
                </Popup>}
              </ReactMapGL>
        </div>
    )
}

export default CreateBranch
