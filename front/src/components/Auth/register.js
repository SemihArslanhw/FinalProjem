import React, { useRef } from 'react'
import { LockOpen } from "@material-ui/icons"
import * as api from "../../api/index"
import { useDispatch } from 'react-redux';
import {signin} from "../../actions/auth";
import { useHistory } from "react-router-dom";

function Register() {
    const Email = useRef();
    const Password = useRef();
    const PasswordAgain = useRef();
    const history = useHistory()
 

    const handleRegister = async(e) => {
     e.preventDefault();
      
     if(PasswordAgain.current.value === Password.current.value){
         
       try {
           const res = await api.register(Email.current.value , Password.current.value)
           alert("İşleminiz Başarılı Giriş Kısmına Yönlendiriliyorsunuz")
           history.push("/giris")
       } catch (error) {
           console.log(error.message);
           if(error.message === "Request failed with status code 400"){
               alert("Böyle bir kullanıcı mevcut");
           }
       } 
     }else{
         console.log(PasswordAgain.current.value , Password.current.value)
         alert("Şifreler eşleşmiyor");
     }
   
    }

    return (
        <div className="flex  mt-20 text-black w-full text-center h-full items-center justify-center">
             <div className=" h-3/4 w-96 shadow-lg flex-col items-center  flex">

            <LockOpen className="mt-10" fontSize="large"/>
            <form className="flex flex-col w-full  h-full justify-around items-center" onSubmit={handleRegister}>
              <div>
              <div className="flex w-full flex-col rounded-sm h-20 items-start"> <h2 className="py-3">E-posta</h2> <div className="w-full items-center rounded-sm justify-center h-10 bg-white border-2 hover:border-gray-500 "> <input ref={Email} minLength="6" required type="email" className="w-full p-1 bg-white outline-none"></input></div></div>
              <div className="flex w-full flex-col rounded-sm h-20 items-start"> <h2 className="py-3">Şifre</h2> <div className="w-full items-center rounded-sm justify-center h-10 bg-white border-2 hover:border-gray-500 "> <input ref={Password} required type="password" className="w-full  p-1 bg-white outline-none"></input></div></div>
              <div className="flex w-full flex-col rounded-sm h-20 items-start"> <h2 className="py-3">Şifre Onayla</h2> <div className="w-full items-center rounded-sm justify-center h-10 bg-white border-2 hover:border-gray-500 "> <input ref={PasswordAgain} required type="password" className="w-full  p-1 bg-white outline-none"></input></div></div>
                </div>
                <div className="flex flex-col"> 
                    <button className="shadow-lg rounded-sm hover:bg-green-400 hover:text-white w-44 h-10" type="submit">Kayıt Ol</button>
                    <h3>Hesabın varsa <span className="border-b border-black cursor-pointer text-red-500" onClick={()=>history.push("/giris")}> giriş yap </span></h3>
                </div>
               
            </form>
            </div>
        </div>
    )
}

export default Register
