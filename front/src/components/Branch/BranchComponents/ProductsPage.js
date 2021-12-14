import React, { useEffect , useState } from 'react'
import * as api from '../../../api/index'
import { useHistory } from 'react-router';
import { useParams } from "react-router-dom";
import ProductComponent from './ProductComponent/ProductComponent';

function ProductsPage({branch}) {
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const [companyInfos , setCompanyInfos] = useState();
    const [branchId , setbranchId] = useState();
    const [products , setProducts] = useState();
    const [productLoading , setProductLoading] = useState(true);
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
    console.log(branch)
    getCompany();
    getProduct();
    },[branch])

    
        
    
   

    const getProduct = async () => {
        try {
            
            const products = await api.getProductsByBranchId(branch._id);
            console.log(products.data);
            setProducts(products.data);
            setProductLoading(false);
        }catch(err){
            console.log(err);
            setProductLoading(false);
        }
    }

const getCompany = async () => {
    try {
        const res =await api.getCompanyById(branch?.CompanyId);
        setCompanyInfos(res.data[0]);
    } catch (error) {
        console.log(error.message);
    }
        
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            {companyInfos?.Author === user.result.email && <p className='w-full hover:text-yellow-400 transition-all border-b-2 border-yellow-500 cursor-pointer' onClick={()=>history.push("/company/"+params.companyname + "/" + params.branchname + "/createProduct")}>Yeni Ürün Oluşturun</p>}
            {productLoading ? <div class="flex justify-center  items-center">
            <div
              class="
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-4 border-b-4 border-purple-500
    "
            ></div>
          </div>  : <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6  gap-10'>{products?.map((product,i) => {
                return <ProductComponent product={product} key={i}/>
      
            })} </div>
           
           
           }
        </div>
    )
}

export default ProductsPage
