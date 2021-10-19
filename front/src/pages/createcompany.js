import React from 'react'
import { ToastContainer } from 'react-toastify'
import CompanyHeader from '../components/Company/companyHeader'
import CompanyLeftBar from '../components/Company/companyLeftBar'
import CompanyPage from '../components/Company/companyPage'
import CreateCompany from '../components/Company/createCompany'
import Header from "../components/Headers/header"

function Createcompany() {
    return (
        <div className="flex flex-col h-full w-full">
            <Header />

            <CreateCompany />


        </div>
    )
}

export default Createcompany
