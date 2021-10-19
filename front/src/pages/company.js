import React from 'react'
import { ToastContainer } from 'react-toastify'
import CompanyPage from '../components/Company/companyPage'
import Header from "../components/Headers/header"

function Company() {
    return (
        <div className="flex flex-col h-full w-full">
            <Header/>
            <CompanyPage/>
        </div>
    )
}

export default Company
