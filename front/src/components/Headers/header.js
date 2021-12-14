import React, { useEffect, useRef, useState } from 'react'
import { Search } from "@material-ui/icons"
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Avatar } from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';
import { Person } from '@material-ui/icons';
import * as api from '../../api/index';
import Logo from "./logo.png"

function Header() {
    const history = useHistory();
    const searchText  = useRef();
    const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [profileBar, setProfileBar] = useState(false);
    const [searchResponse , setSearchResponse] = useState();
    const [searchBar, setSearchBar] = useState(false);
    const [search, setSearch] = useState();
    const PF = "http://185.136.160.132/images/";
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push("/")
        setUser(null);
    }
    
    const handleSearch = async() => {
    try {
    const res =await api.searchBranches(searchText.current.value);
    setSearchResponse(res.data);
    } catch (error) {
        console.log(error);
    }
    }
    
    return (
        <div className="w-full z-50 fixed flex items-center  justify-around shadow-md bg-white h-20">
            {searchBar && <div class="absolute mt-20    w-full inset-y-0  flex justify-center  pr-2">
        <div className='bg-white overflow-y-scroll  h-96 w-2/5  border-2  rounded-b-lg'>
        {searchResponse?.map((Branch, index) => {
        return(
            <div onClick={()=>{history.push("/company/"+ Branch.CompanyName +"/" + Branch.BranchName)}} className="cursor-pointer w-full flex flex-col justify-center hover:bg-gray-100 bg-white border-2 h-20 text-black">
        <p className="ml-4 text-center">{Branch.BranchName}  </p>  
        <div className="container h-3/4 p-3 flex items-center ">
            <img className=" object-fill rounded-xl h-16 mb-6 w-1/4 " src={PF + Branch.BranchImage}></img>
            <p className="ml-auto left-full">{Branch.BranchAddressCity} / {Branch.BranchAddressdistrict}</p></div>
        </div> 
        )
    })
        }
        </div>
    </div>}
            <img src={Logo} onClick={() => { history.push("/") }}  className="w-24 h-20  cursor-pointer text-black"></img>

            <div class="relative w-1/4 text-gray-700">
  <input   ref={searchText} class="w-full h-10 pl-8 pr-3 text-base placeholder-gray-600 border rounded-lg outline-none bg-gray-200 focus:border-black" onChange={()=>handleSearch()}  onClick={()=>{setSearchBar(true)}} type="text" placeholder="Markaya , kıyafete göre arama yap"/>
   
  <div class="absolute inset-y-0 left-0 flex items-center px-2 ">
  {!searchBar ?<Search ></Search>
: <p className='cursor-pointer' onClick={()=>setSearchBar(false)}>X</p>  
} 
  </div>
</div>
            {!user ? <div onClick={()=>{history.push("/giris")}} className="flex cursor-pointer text-black group"><p className="group-hover:text-yellow-600">Giriş Yap</p> <Person className="group-hover:text-yellow-600"/> </div> : <div className="flex w-40 items-center justify-between">  
               <div onClick={()=>history.push("/company")} className="text-black cursor-pointer group flex items-center"> <p className="transition transform duration-500 ease-in-out group-hover:text-red-600 mx-1">Mağazam</p> <ShoppingBasket className="transition  transform duration-500 ease-in-out h-10 w-20 rounded-lg text-blue-600 group-hover:text-red-600 " fontSize="small"/></div>
              <div className="cursor-pointer"   onClick={() => { setProfileBar(!profileBar) }}><Avatar alt={user?.result.email}  />  </div></div>}
            {profileBar && (
                <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 lg:right-40 shadow mt-16 top-0 ">
                    <li onClick={() => history.push(`/profile/${user.result.email}`)} className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-gray-300 focus:text-gray-300 focus:outline-none">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={7} r={4} />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <span className="ml-2">Profilim</span>
                        </div>
                    </li>
                    <li onClick={() => { logout(); setProfileBar(!profileBar) }} className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-gray-300 flex items-center focus:text-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2">Çıkış Yap</span>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Header
