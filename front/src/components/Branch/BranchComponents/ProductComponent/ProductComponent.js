import React from 'react'
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";


function ProductComponent({ product }) {
    const PF = "http://localhost:8800/images/";
    const params = useParams();
    const history = useHistory();

    return (
        <div className=' group mt-3 cursor-pointer hover:shadow-md flex flex-col items-center  text-black h-96 border-2 w-52' onClick={()=>history.push("/company/"+params.companyname+"/"+params.branchname+"/"+product._id  )}>
            <img className='h-full group-hover:opacity-70 transition duration-500 object-fill' src={PF + product.ProductImage}></img>
          <div className='flex items-center gap-1'> <p className='font-bold text-sm font-mono'>{params.companyname }</p><p className='text-sm font-mono'>{product.ProductName}</p></div>
            {product?.Category}
          {product.ProductStockSituation === "var" ? <div className='absolute ml-36 '>Mevcut</div>: <div className='absolute ml-32 translate-y-1/2'>Stokta Yok</div>}  
        </div>
    )
}

export default ProductComponent
