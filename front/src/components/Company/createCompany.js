import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router';
import CompanyHeader from './companyHeader'
import CompanyLeftBar from './companyLeftBar'
import QrCode from "qrcode"
import * as api from "../../api/index"
import RequiredInfcomp from './creatingCompanycomp/requiredInfcomp';

function CreateCompany() {
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const companyName = useRef();
    const description = useRef();
    const address = useRef();
    const phone = useRef();
    const email = useRef();
    const [qrImage, setQrImage] = useState(null)
    const [comString, setComString] = useState("");
    const [comDescription, setComDescription] = useState();
    const history = useHistory();
    const [logoFile, setLogoFile] = useState(null);
    const [backTopImageFile, setBackTopImageFile] = useState(null);

   


    const companyNameAlgorthym = () => {
        const comText = companyName.current.value;
        setComString(comText);
        if (comText !== "") {
            QrCode.toDataURL("http://localhost:3000/company/" + comText).then((src) => {
                setQrImage(src);
                console.log(src)
            })
        }



    }
    const sirketKayıt = async(e) => {
        e.preventDefault();
        
        const username = user?.result.email;
        console.log(username)
       
        if (logoFile !== null && backTopImageFile !== null) {
            const data1 = new FormData();
            const filename1 = username + "_" + companyName.current.value + "1";
            data1.append('name', filename1);
            data1.append('file', backTopImageFile);
            

            const data = new FormData();
            const filename = username + "_" + companyName.current.value;
            data.append("name", filename);
            data.append("file", logoFile);
            console.log(filename,filename1)
            try {                
            
                const res =await api.createPost(username, companyName.current.value, description.current.value, address.current.value, phone.current.value, email.current.value, filename, filename1);
                await api.uploadFile(data1);
                await api.uploadFile(data);
                setTimeout(() => {
                    //history.push("/company/" + comString);
                    history.push("/company");
                }, 1000)
            } catch (error) {
                console.log(error);
               
            }
        } else {
            console.log("You didn't add any file!");
        }
    }
    const companyDescriptionAlgorthym = () => {
        const comDesc = description.current.value
        setComDescription(comDesc);

    }
    
    return (
        <div className="w-full h-full  mt-20 flex text-black">
            <div className="h-full w-1/5 flex "><CompanyLeftBar /></div>

            <div className="h-full w-4/5 flex flex-col">
                <CompanyHeader />
                <div className="w-full h-full mt-10 flex flex-col items-center ">
                    <p className="text-left w-4/5"> Şirket görünüm önizlemesi </p>
                    <div className="shadow-md h-52  container mx-auto flex flex-col items-center  ">
                        {!backTopImageFile && <img className=" bg-yellow-400 rounded-t-lg w-4/5 h-16" ></img>}
                        {comString !== "" &&(<div className="right-0 flex items-center absolute top-40"><p>Şirket Qr Kodu (İndirmek İçin Qr Koda Tıklayın)</p> <a href={qrImage} download> <img  className=" w-20 h-20  " src={qrImage}></img> </a> </div>) }
                        {backTopImageFile && <img className=" object-fill rounded-t-lg w-4/5 h-16" src={URL.createObjectURL(backTopImageFile)} alt="" />}
                        <div className="bg-blue-800 flex  justify-between items-center rounded-b-lg w-4/5 h-28">
                            <p className="text-white mx-10" >{comString}</p>
                            <p className="text-white mt-10 mx-10">{comDescription}</p>
                        </div>
                        {!logoFile && <img className="absolute rounded-full w-20 h-20 bg-gray-200 "></img>}
                        {logoFile && <img className="absolute object-fill rounded-full w-20 h-20" src={URL.createObjectURL(logoFile)} alt="" />}
                    </div>
                    <div></div>
                    <div></div> 
                    <form className="flex w-full h-full" onSubmit={sirketKayıt}>
                    
                    <div className="flex flex-col p-3  lg:flex-row  justify-center  w-full">
                       
                          <div className="w-full flex-col justify-center items-center">
                              <h1 className="my-3 font-mono text-center">Gerekli Bilgiler</h1>
                          <div className="flex w-full">
                          <div className="w-1/2 flex flex-col"> 
                               <RequiredInfcomp onChange={companyNameAlgorthym} refer={companyName} placeholder="Şirket İsmi"/>
                               <RequiredInfcomp onChange={companyNameAlgorthym} refer={address} placeholder="Kurumsal Adres"/>
                               <RequiredInfcomp onChange={companyNameAlgorthym} refer={phone} placeholder="Kurumsal Numara"/>
                                  
                          </div>
                          <div className="w-1/2 flex flex-col">  
                              <RequiredInfcomp onChange={companyDescriptionAlgorthym} refer={description} placeholder="Açıklama"/>
                              <RequiredInfcomp onChange={companyDescriptionAlgorthym} refer={email} placeholder="Kurumsal E-posta"/>
        
                          </div>
                          </div>
                            </div>
                            <div className=" w-full  flex flex-col items-center ">
                        
                        <div className=" flex flex-col justify-between items-center  p-4  m-4 w-full  h-full ">
                            <div className="w-full flex justify-around" >
                            <div className="flex  w-1/4 rounded-lg  items-center ">
                                <input
                                    type="file"
                                    id="fileInput1"
                                    className="hidden "
                                    onChange={(e) => setLogoFile(e.target.files[0])}

                                />
                                <label htmlFor="fileInput1" className="w-56 py-4 cursor-pointer hover:opacity-80 h-20 flex items-center justify-center border-2 hover: bg-green-500"> Şirket Logosunu Seçiniz</label>
                            </div>
                            
                            <div className="flex  w-1/4 rounded-lg  items-center ">
                                <input
                                    type="file"
                                    id="fileInput2"
                                    className="hidden"
                                    onChange={(e) => setBackTopImageFile(e.target.files[0])}

                                />
                             <label htmlFor="fileInput2" className=  { "w-56 cursor-pointer hover:opacity-80 h-20 flex items-center justify-center border-2 hover: bg-green-500" }>Üst Arkaplan Resmi Seç</label>
                            </div>
                            </div>
                           <button type="submit"   className="transition  cursor-pointer duration-500 ease-in-out text-white font-medium hover:text-blue-600 mt-9 w-48 h-14 rounded-md bg-blue-600 hover:bg-blue-200 " > Kaydı Tamamla </button> 
                           </div>
                         
                       
                   
                    </div>
                  </div>
                        </form>
                       
                   

                </div>


            </div>
        </div>
    )
}

export default CreateCompany
