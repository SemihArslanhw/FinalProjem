import React, { useEffect } from 'react'
import { Close } from '@material-ui/icons';
import { Image } from '@material-ui/icons';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import * as api from '../../api/index'

function CreateProductPage() {
  const [productImage, setProductImage] = React.useState();
  const productName = React.useRef();
  const productType = React.useRef();
  const ProductDescription = React.useRef();
  const productSituation = React.useRef();
  const params = useParams();
  const history = useHistory();
  
  useEffect(() => {
   const getBranch = async () => {
      const branch = await api.getBranchByBranchName(params.branchname);
      
    }
    getBranch();
  }, [])

  console.log(params)
  const handleSubmit =async(e) => {
    e.preventDefault()
    if(productImage !== null && productName.current.value !== "" && productType.current.value !== "" && ProductDescription.current.value !== "" && productSituation.current.value !== ""){
      const data1 = new FormData();
      const filename1 ="producct_" + productName.current.value + "_" + params.branchname;
      data1.append('name', filename1);
      data1.append('file', productImage);
      try {
        const res = await api.createProduct();
        await api.uploadFile(data1);
      } catch (error) {
        
      }
    }else{
        alert("Herhangi Bir Yeri Boş Bırakmayınız")
    }

  }

    return (
        <div className='container m-auto pb-20 gap-5 w-full h-screen  flex items-center justify-center '>
           <div className='rounded-lg border w-96 h-4/5  items-center justify-center flex'>
           <input type="file" id="branchImg" onChange={(e) => setProductImage(e.target.files[0])} className="hidden"></input>
           {!productImage ? <label htmlFor="branchImg" className="cursor-pointer transition-all sm:rounded-xl h-full    w-full  rounded-t-xl flex items-center justify-center"><Image fontSize="large"/> </label> :
            <div className=" w-full  "  >
                <Close className="text-black z-50 ml-1 absolute cursor-pointer transition-all transform hover:scale-150 " onClick={()=>{setProductImage(null)}}/>
               <Zoom> <img className="w-full  h-full object-cover  " src={URL.createObjectURL(productImage)}></img></Zoom>
                
                </div>}

           </div>
           <div className='flex flex-col items-center justify-between w-96 h-4/5'>
           <div className=' w-full h-full'>
          <input ref={productName} className='p-3 w-full bg-white outline-none border-b-2' placeholder='Ürün İsmi'></input>
          <p onClick={()=>history.push("/company/"+params.companyname)} className='p-3 cursor-pointer border-b-2 border-white hover:text-blue-600 hover:border-gray-400 transition-all'>Satıcı: {params.companyname}</p>
          <input ref={productType} className='p-3 w-full bg-white outline-none border-b-2' placeholder='Ürün Kategorisi (Giyim,Elektronik ...)'></input>
          <textarea ref={ProductDescription} className='p-3 w-full bg-white outline-none border-b-2' placeholder='Ürün Açıklaması'> </textarea>
          <input ref={productSituation} className='p-3 w-full bg-white outline-none border-b-2' placeholder='Ürünün Stok Durumu (Var , Yok)'></input>
           </div>
           <button type="submit" onClick={(e)=>{handleSubmit(e)}} className='mb-20 text-lg text-white rounded-lg h-20 w-52 bg bg-yellow-400 transition-all hover:bg-green-500' >Kaydet</button>
           </div>
        </div>
    )
}

export default CreateProductPage
