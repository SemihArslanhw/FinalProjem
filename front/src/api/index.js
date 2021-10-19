import axios from "axios"

const API = axios.create({baseURL: "http://localhost:8800/api/"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });
  

  // AUTH
export const signIn = (email,password) => API.post('/auth/login', {email,password});

 // CREATİNG NEW COMPANY
 export const createPost = (title,postType,postCategory,text,image,author) =>API.post("post/newPost" ,{ title,postType,postCategory,text,image,author});

 // Upload File
export const uploadFile = (data) => API.post("/upload", data);

 // REGİSTER
export const register = (email,password) => API.post("/auth/register" , {email , password}) 

  //GET ALL PİNS
export const getAllPins = () => API.get("/pins")