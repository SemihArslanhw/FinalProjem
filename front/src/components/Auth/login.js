import React, { useRef } from 'react'
import { LockOpen } from "@material-ui/icons"
import * as api from "../../api/index"
import { useDispatch } from 'react-redux';
import {signin} from "../../actions/auth";
import { useHistory } from "react-router-dom";

function Login() {
    const Email = useRef();
    const Password = useRef();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogin = (e) => {
     e.preventDefault();
     console.log(Email.current.value);
     console.log(Password.current.value);
     const res =  dispatch(signin(Email.current.value,Password.current.value, history))
     console.log(res.res)
    }

    return (
        <div className="flex  mt-20 text-black w-full text-center h-full items-center justify-around">
            <div className="w-1/2 h-3/4 flex items-center justify-center"><div className="absolute text-white font-mono">Giriş yap ve indirimleri yerinde yakala</div> <img className="rounded-lg shadow-sm object-fill" src="//dfcdn.defacto.com.tr/Mobile/login-page_82ddbf98-2851-49df-bf33-e166b6779508_baf627aa-c73b-4937-ad5c-5e2167d2f9b8_DI_298.jpg"></img></div>
           <div className=" h-3/4 w-96 shadow-lg flex-col items-center  flex">

            <LockOpen className="mt-10" fontSize="large"/>
            <form className="flex flex-col w-full  h-full justify-around items-center" onSubmit={handleLogin}>
              <div>
              <div className="flex w-full flex-col rounded-sm h-20 items-start"> <h2 className="py-3">E-posta</h2> <div className="w-full items-center rounded-sm justify-center h-10 bg-white border-2 hover:border-gray-500 "> <input ref={Email} minLength="6" required type="email" className="w-full p-1 bg-white outline-none"></input></div></div>
              <div className="flex w-full flex-col rounded-sm h-20 items-start"> <h2 className="py-3">Şifre</h2> <div className="w-full items-center rounded-sm justify-center h-10 bg-white border-2 hover:border-gray-500 "> <input ref={Password} required type="password" className="w-full  p-1 bg-white outline-none"></input></div></div>
                </div>
                <div className="flex flex-col"> 
                    <button className="shadow-lg rounded-sm hover:bg-green-400 w-44 h-10" type="submit">Giriş</button>
                    <h3>Hesabın yoksa <span className="border-b border-black cursor-pointer text-red-500" onClick={()=>history.push("/kayıt")}> kayıt ol </span></h3>
                </div>
               
            </form>
            </div>
        </div>
    )
}

export default Login
