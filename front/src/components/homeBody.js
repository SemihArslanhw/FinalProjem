import React, { useEffect, useRef, useState,Component } from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Map from './map'
import Login from './Auth/login';
import * as api from "../api/index"



function HomeBody() {
    const [dimension, setDimension] = useState([]);
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const [pins , setPins ] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
     const getAllPins = async () => {
        const pins = await api.getAllPins()
        setPins(pins?.data)
        console.log(pins)
     }
     getAllPins();
    },[])

    return (
        <div className="h-screen w-full flex flex-col items-center">
        <div className="container mx-auto justify-center  sm:justify-between  h-full w-full flex flex-wrap min-w-24 mt-20 items-center ">

            <div className=" w-2/5 h-5/6  bg-red-400 "><Map pins = {pins} ></Map></div>


            <div className="w-2/5 h-5/6 rounded-lg items-center justify-center flex flex-col bg-yellow-50">
           {!loading && <div class="flex justify-center  items-center">
  <div
    class="
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-4 border-b-4 border-purple-500
    "
  ></div>
</div>} 


            </div>
            

        </div>
         
        </div>
    )
}

export default HomeBody
