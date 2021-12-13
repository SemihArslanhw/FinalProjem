import React from 'react'
import Header from '../components/Headers/header'
import CreateProductPage from '../components/Product/CreateProductPage'


function CreateProduct() {
    return (
        <div>
            <Header />
            <div className='pt-20 w-full h-full text-black'> 
            <CreateProductPage/>
            </div>
        </div>
    )
}

export default CreateProduct
