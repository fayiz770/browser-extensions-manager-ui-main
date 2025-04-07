import React, { useState } from 'react'
import MainHeader from './MainHeader.jsx'
import Extention from './Extention.jsx'
export default function Main({data}) {
    const [filteredData, setFilteredData] = useState(data)
    const extentionList = filteredData.map((extention, index) => (
        <Extention
            key={index}
            icon={extention.logo}
            name={extention.name}
            description={extention.description}
            isActive={extention.isActive}
            id={crypto.randomUUID()}
        /> 
    ))


    function allExtentions() {
        setFilteredData(data)
    }


    function activeExtentions() {
        const active = data.filter(extention => extention.isActive)
        setFilteredData(active)
    }


    function inactiveExtentions() {
        const inactive = data.filter(extention => !extention.isActive)
        setFilteredData(inactive)
    }


    return(
        <>
            <MainHeader
                allExtentions={allExtentions}
                activeExtentions={activeExtentions}
                inactiveExtentions={inactiveExtentions}
            />
            <div className="extention-list">
                {extentionList}
            </div>
        </>
    )
}