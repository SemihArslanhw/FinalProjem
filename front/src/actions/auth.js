import {AUTH} from '.././constants/asctionTypes';
import * as api from '../api/index.js';
import {toast} from "react-toastify";
import axios from 'axios';

export const signin = (email,password, router) => async (dispatch) => {

    try {
        const { data } = await api.signIn(email,password)
        dispatch({type: AUTH, data});
        toast.success(`Login Successful`);
        setTimeout(() => {
            router.push('/')
            window.location.reload();
          }, 1000)
    } catch (error) {
        
        console.log(error.response.data)
    }    
}
