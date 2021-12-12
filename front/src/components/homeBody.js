import React, { useEffect, useRef, useState,Component } from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Map from './map'
import Login from './Auth/login';
import * as api from "../api/index"



function HomeBody() {
    const [dimension, setDimension] = useState([]);
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const [pins , setPins ] = useState([])
    const [loading, setLoading] = useState(true);
    const [pinloading, setPinLoading] = useState(true);

    useEffect(()=>{
     const getAllPins = async () => {
     try {
        const pins = await api.getAllPins();
        setPins(pins?.data);
        setPinLoading(false);
        console.log(pins.data)
     } catch (error) {
      setPinLoading(false);
     }
     
     }
     getAllPins();
    },[])

    return (
        <div className="h-screen w-full flex flex-col items-center">
        <div className="container mx-auto justify-center  sm:justify-between  h-full w-full flex flex-wrap min-w-24 mt-10 items-center ">

        {pinloading ? <div class="flex justify-center  items-center">
            <div
              class="
      animate-spin
      rounded-full
      h-32
      w-full
      border-t-4 border-b-4 border-purple-500
    "
            ></div>
          </div>
            : <Map pins={pins}></Map>
          }


            
            

        </div>
         
        </div>
    )
}

export default HomeBody
