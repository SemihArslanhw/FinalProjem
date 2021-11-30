import React, { useEffect , useState} from 'react'
import QrCode from "qrcode"
import { useHistory } from 'react-router';

function CompanyCard({ company }) {
    const [qrImage, setQrImage] = useState(null)
    const PF = "http://localhost:8800/images/";
    const history = useHistory();
    
    useEffect(() => {
       
        console.log(company)
    }, [company]);



    return (
        <div className="w-full items-center flex flex-col">
            
            <div className=" h-52 w-4/5 container mx-auto flex flex-col items-center cursor-pointer" onClick={()=> history.push("/company/" + company.CompanyName)}>
                        
                        
                        { <img className="border-2  object-fill rounded-t-lg w-full h-16" src={PF + company.BackTopİmage } alt="" />}
                        <div className="bg-blue-800 flex  justify-between items-center rounded-b-lg w-full h-28">
                            <p className="text-white mx-10" >{company.CompanyName}</p>
                            <p className="text-white mt-10 mx-10">{company.Description}</p>
                        </div>
                       
                        { <img className="absolute object-fill rounded-full w-20 h-20" src={PF + company.Companyimage} alt="" />}
                    </div>
            
        </div>

    )
}

export default CompanyCard
