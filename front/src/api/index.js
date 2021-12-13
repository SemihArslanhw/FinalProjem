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
 export const createPost = (author,CompanyName,Description,Address,Phone,Email,Companyimage,BackTopİmage) =>API.post("/companies/create" ,{Author : author,CompanyName: CompanyName,Description: Description,Address : Address,Phone: Phone,Email: Email,Companyimage: Companyimage,BackTopİmage: BackTopİmage});

 // Upload File
export const uploadFile = (data) => API.post("/upload", data);

 // REGİSTER
export const register = (email,password) => API.post("/auth/register" , {email , password}) 

 // CREATİNG NEW PİN
export const createPin = (BranchName,lat,long) => API.post("/pins/create" ,{BranchName ,lat,long} );

  //GET ALL PİNS
export const getAllPins = () => API.get("/pins")

 //GET ALL COMPANIES
export const getAllCompanies = () => API.get("/companies")

 //GET COMPANY BY ID
export const getCompanyById = (_id) => API.get("/companies/getByCompanyID/"+_id)

  //GET COMPANY BY ID
export const getCompanyByAuthor = (author) => API.get("/companies/getByID/"+author)

  //GET COMPANY BY COMPANYNAME
export const getCompanyByCompanyName = (companyName) => API.get("/companies/getByCompanyName/"+companyName)

  //GET PIN BY COMPANYNAME
export const getPinByCompanyId = (companyId) => API.get("/pins/getByCompany/"+companyId)

  //GET BRANCHES BY COMPANYID
export const getBranchesByCompanyId = (companyID) => API.get("/branches/getByCompanyID/" + companyID)

  //CREATE BRANCH
export const createBranch = (CompanyId,BranchName,BranchAddress,BranchAddressCity,BranchAddressdistrict,BranchPhone,BranchGoogleMaps,BranchImage) => API.post("/branches/create" , {CompanyId,BranchName,BranchAddress,BranchAddressCity,BranchAddressdistrict,BranchPhone,BranchGoogleMaps,BranchImage})

  //GET BRANCH BY BRANCHNAME
export const getBranchByBranchName = (BranchName) => API.get("/branches/getBranch/"+BranchName)

  //SEARCH 
export const searchBranches = (regex) => API.get("/search/"+regex)
  
  //CREATE PRODUCT 
export const createProduct = (BranchId,ProductName,Category,ProductImage,ProductDescription,ProductStockSituation) => API.post("/products/create" , {BranchId,ProductName,Category,ProductImage,ProductDescription,ProductStockSituation})