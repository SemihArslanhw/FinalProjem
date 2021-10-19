import React from 'react'
import Slide from "react-slick"
import { useHistory } from "react-router";

function Subheader() {
    const history = useHistory();

    const settings = {
        dots: false,
        pauseOnFocus:true,
        infinite: true,
        arrows:false,
        speed: 400,
        slidesToShow: 6,
        autoplay:true,
        slidesToScroll: 1
      };
    
    
    return (
        <div className="z-40 w-full mt-5  flex flex-col items-center border-b-2 border-black">
        <div className="text-black font-mono h-20  w-full mt-20  "> 
           <Slide {...settings}>
           <div className="flex   items-center justify-center   ">
              <div className="flex flex-col items-center justify-center"> 
               
                   <img onClick={()=>{history.push("/company/LC Waikiki")}} src="https://logowik.com/content/uploads/images/349_lcwaikiki1.jpg" className="border hover:border-green-400 cursor-pointer w-20 h-20 rounded-full" loading="lazy"></img>
              
               <p>LC Waikiki</p>
               </div>
               </div>
               <div className="flex   items-center justify-center   ">
              <div className="flex flex-col items-center justify-center"> 
              <img onClick={()=>{history.push("/company/Kinetix")}} src="https://i.pinimg.com/originals/94/27/04/942704e4ec3970e6e1a9458ea6cb535f.jpg" className="border hover:border-green-400 cursor-pointer w-20 h-20 rounded-full" loading="lazy"></img>
               <p>Kinetix</p>
               </div>
               </div>
               <div className="flex   items-center justify-center   ">
              <div className="flex flex-col items-center justify-center"> 
              <img onClick={()=>{history.push("company/HUMMEL")}} src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355075_Hummel.png" className="border hover:border-green-400 cursor-pointer w-20 h-20 rounded-full" loading="lazy"></img>
               <p>HUMMEL</p>
               </div>
               </div> <div className="flex   items-center justify-center   ">
              <div className="flex flex-col items-center justify-center"> 
              <img onClick={()=>{history.push("/company/Pull & Bear")}} src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/5/24/20210524_17061621865162_Pullbear.png" className="border hover:border-green-400 cursor-pointer w-20 h-20 rounded-full" loading="lazy"></img>
               <p>Pull & Bear</p>
               </div>
               </div> <div className="flex   items-center justify-center   ">
              <div className="flex flex-col items-center justify-center"> 
              <img onClick={()=>{history.push("/company/Koton")}} src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355115_Koton.png" className="border hover:border-green-400 cursor-pointer w-20 h-20 rounded-full" loading="lazy"></img>
               <p>Koton</p>
               </div>
               </div> <div className="flex   items-center justify-center   ">
              <div className="flex flex-col items-center justify-center"> 
              <img onClick={()=>{history.push("/company/DeFacto")}} src="https://cdn.dsmcdn.com/marketing/datascience/automation/2021/7/30/Defacto_202107301618.png" className="border hover:border-green-400 cursor-pointer w-20 h-20 rounded-full" loading="lazy"></img>
               <p>DeFacto</p>
               </div>
               </div> <div className="flex   items-center justify-center   ">
              <div className="flex flex-col items-center justify-center"> 
              <img onClick={()=>{history.push("/company/Nivea")}} src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15531619355215_Nivea.png" className="border hover:border-green-400 cursor-pointer w-20 h-20 rounded-full" loading="lazy"></img>
               <p>Nivea</p>
               </div>
               </div> <div className="flex   items-center justify-center   ">
              <div className="flex flex-col items-center justify-center"> 
              <img onClick={()=>{history.push("/company/English Home")}} src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15501619355012_EnglishHome.png" className="border hover:border-green-400 cursor-pointer w-20 h-20 rounded-full" loading="lazy"></img>
               <p>English Home</p>
               </div>
               </div> <div className="flex   items-center justify-center   ">
              <div className="flex flex-col items-center justify-center"> 
              <img onClick={()=>{history.push("/company/Nike")}} src="https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15531619355211_Nike.png" className="border hover:border-green-400 cursor-pointer w-20 h-20 rounded-full" loading="lazy"></img>
               <p>Nike</p>
               </div>
               </div>
              
               
               
               

           </Slide> 
        </div>
        </div>
    )
}

export default Subheader
