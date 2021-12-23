import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { useParams } from "react-router-dom";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import * as api from '../../api/index'

function ProductDetails() {
    const PF = "http://localhost:8800/images/";
    const params = useParams();
  const history = useHistory();
  const [product, setProduct] = React.useState();
  const [productLoading, setProductLoading] = React.useState(true);

  useEffect(() => {
      getProduct();
  }, [])

  const getProduct = async() => {
      console.log(params.id)
   try {
     const res =await api.getProductByProductId(params.id)
        console.log(res.data)
        setProduct(res.data)
        setProductLoading(false)
    } catch (error) {
       console.log(error)
       setProductLoading(false)
   }  
}

    return (
      <div className='pt-20 w-full h-screen text-black items-center'>
          {productLoading ? <div class="flex mt-20 justify-center  items-center">
            <div
              class="
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-4 border-b-4 border-purple-500
    "
            ></div>
          </div> :<div className='container m-auto pb-20 gap-5 w-full h-screen  flex items-center justify-center '>
              
           <div className='rounded-lg border w-96 h-4/5  items-center justify-center flex'>
        
           
               <Zoom> <img className="w-full  h-full object-cover  " src={PF + product?.ProductImage}></img></Zoom>
                
                

           </div>
           <div className='flex flex-col items-center justify-between w-96 h-4/5'>
           <div className=' w-full h-full'>
          <p  className='p-3 w-full bg-white outline-none border-b-2' >{"Ürün : " + product?.ProductName}</p>
          <p onClick={()=>history.push("/company/"+params.companyname)} className='p-3 cursor-pointer border-b-2 border-white hover:text-blue-600 hover:border-gray-400 transition-all'>Satıcı: {params.companyname}</p>
          <p className='p-3 w-full bg-white outline-none border-b-2' >{"Kategori : " + product?.Category}</p>
          <p  className='p-3 w-full bg-white outline-none break-words  border-b-2' >{"Detaylar : " + product?.ProductDescription} </p>
          <p className='p-3 w-full bg-white outline-none border-b-2' >{"Stok Durumu : " + product?.ProductStockSituation}</p>
           </div>
           
           </div>
    </div>}
        
        </div>
        
    )
}

export default ProductDetails
