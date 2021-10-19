import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router';
import CompanyHeader from './companyHeader'
import CompanyLeftBar from './companyLeftBar'
import QrCode from "qrcode"
import * as api from "../../api/index"

function CreateCompany() {
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const companyName = useRef();
    const description = useRef();
    const [qrImage, setQrImage] = useState()
    const [comString, setComString] = useState();
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
            })
        }



    }
    const companyDescriptionAlgorthym = () => {
        const comDesc = description.current.value
        setComDescription(comDesc);

    }
    const filePost = (e) => {
        e.preventDefault();
        const username = user?.result.username;

        if (logoFile) {
            const data = new FormData();
            const filename = username + "_" + logoFile.name;
            data.append("name", filename);
            data.append("file", logoFile);


        } else {
            alert("You didn't add any file!");
        }
    }
    return (
        <div className="w-full h-full  mt-20 flex text-black">
            <div className="h-full w-1/5 flex "><CompanyLeftBar /></div>

            <div className="h-full w-4/5 flex flex-col">
                <CompanyHeader />
                <div className="w-full h-full mt-10 flex flex-col items-center ">
                    <p className="text-left w-4/5"> Şirket görünüm önizlemesi </p>
                    <div className="shadow-sm h-52  container mx-auto flex flex-col items-center  ">
                        {!backTopImageFile && <img className=" bg-yellow-400 rounded-t-lg w-4/5 h-16" ></img>}
                        {QrCode &&(<div className="right-0 flex items-center absolute top-40"><p>Şirket Qr Kodu</p> <img className=" w-20 h-20  " src={qrImage}></img> </div>) }
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
                    <h1 className="my-3 font-mono">Gerekli Bilgiler</h1>
                    <div className=" shadow-sm   flex   w-full">
                        <div className="flex flex-col w-2/4  items-center justify-around">

                            <div className="flex bg-gray-200 my-3 rounded-lg  items-center ">
                                <input
                                    onChange={companyNameAlgorthym}
                                    ref={companyName}
                                    className="flex bg-gray-200 h-10 rounded-lg  p-3 w-full text-gray-900 items-center outline-none "
                                    placeholder="Şirket İsmi"
                                    type="text">


                                </input>

                            </div>
                            <div className="flex bg-gray-200 my-3 rounded-lg  items-center ">
                                <input

                                    className="flex bg-gray-200 h-10 rounded-lg  p-3 w-full text-gray-900 items-center outline-none "
                                    placeholder="Kurumsal Numara"
                                    type="text">


                                </input>

                            </div>
                            <div className="flex bg-gray-200 my-3 rounded-lg  items-center ">
                                <input

                                    className="flex bg-gray-200 h-10 rounded-lg  p-3 w-full text-gray-900 items-center outline-none "
                                    placeholder="Kurumsal Adres"
                                    type="text">


                                </input>

                            </div>
                            <div className="flex bg-gray-200 my-3 rounded-lg  items-center ">
                                <input

                                    className="flex bg-gray-200 h-10 rounded-lg  p-3 w-full text-gray-900 items-center outline-none "
                                    placeholder="Alan (Giyim , yemek ...)"
                                    type="text">


                                </input>

                            </div>
                        </div>
                        <div className=" flex flex-col my-3 w-2/4 items-center h-10 ">

                            <div className="flex bg-gray-200  rounded-lg  items-center ">
                                <div className="bg-gray-200 rounded-lg h-52 w-full p-3">
                                    <textarea
                                        onChange={companyDescriptionAlgorthym}
                                        ref={description}
                                        className="bg-gray-200 outline-none w-full h-full"
                                        placeholder="Açıklama">
                                    </textarea>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className=" w-full flex flex-col items-center ">
                        <h1 className="font-mono my-3">İsteğe Bağlı Bilgiler</h1>
                        <div className=" flex flex-col my-3 w-2/4 items-center h-10 ">
                            <p>Şirket Logonuz</p>
                            <div className="flex bg-gray-200  rounded-lg  items-center ">
                                <input
                                    type="file"
                                    id="fileInput"
                                    className="opacity-100 "
                                    onChange={(e) => setLogoFile(e.target.files[0])}

                                />

                            </div>
                            <p className="w-48 my-5 text-center">Şirket Arka Plan Resminiz</p>
                            <div className="flex bg-gray-200  rounded-lg  items-center ">
                                <input
                                    type="file"
                                    id="fileInput"
                                    className="opacity-100 "
                                    onChange={(e) => setBackTopImageFile(e.target.files[0])}

                                />

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default CreateCompany
