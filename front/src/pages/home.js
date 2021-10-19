import React from 'react'
import Header from '../components/Headers/header'
import Subheader from '../components/Headers/subheader'
import HomeBody from '../components/homeBody'
import Slider from "../components/slider"

function Home() {
    return (
        <div className="flex flex-col items-center">
        <div className=" flex flex-col w-full h-screen items-center">
        <Header/>
       <Subheader/>
       
        <HomeBody/>
        
            
        </div> 
        
           <Slider/>
        </div>
    )
}

export default Home
