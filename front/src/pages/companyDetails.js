import React from 'react'
import CompanyDetailsComps from '../components/Company/companyDetailsComps'
import Header from "../components/Headers/header"

function CompanyDetails() {
    return (
        <div className="flex flex-col h-full w-full">
        <Header />
        <CompanyDetailsComps/>    
        </div>
    )
}

export default CompanyDetails
