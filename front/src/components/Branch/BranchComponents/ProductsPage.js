import React, { useEffect , useState } from 'react'
import * as api from '../../../api/index'
import { useHistory } from 'react-router';
import { useParams } from "react-router-dom";

function ProductsPage({branch}) {
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const [companyInfos , setCompanyInfos] = useState();
    const history = useHistory();
    const params = useParams();

    console.log(params);
    useEffect(() => {
    const getCompany = async () => {
    try {
        console.log(branch?.CompanyId)
        const res =await api.getCompanyById(branch?.CompanyId);
        console.log(res.data[0].Author , user)
        setCompanyInfos(res.data[0]);
    } catch (error) {
        console.log(error.message);
    }
        
    }
    getCompany();
    
    },[branch])

    return (
        <div>
            {companyInfos?.Author === user.result.email && <p className='w-36 transition-all border-b-2 border-white hover:border-yellow-500 cursor-pointer' onClick={()=>history.push("/company/"+params.companyname + "/" + params.branchname + "/createProduct")}>Yeni Ürün Oluşturun</p>}
            {companyInfos?._id}
        </div>
    )
}

export default ProductsPage
