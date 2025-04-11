import React, { useState } from 'react'
import MainHeader from './MainHeader.jsx'
import Extention from './Extention.jsx'
import pureData from '../data.json'
export default function Main({filteredData, setFilteredData}) {
    const [data, setData] = useState(pureData)
    const filteredExtentions = data.filter(extention => {
        if (filteredData === 'active') {
            return extention.isActive
        } else if (filteredData === 'inactive') {
            return !extention.isActive
        }
        return true
    })

    const extentionList = filteredExtentions.map((extention, index) => (
        <Extention
            key={index}
            icon={extention.logo}
            name={extention.name}
            description={extention.description}
            isActive={extention.isActive}
            id={crypto.randomUUID()}
            setData={setData}
            data={data}
        /> 
    ))
    
    return(
        <>
            <MainHeader
                setFilteredData={setFilteredData}
                selectedFilter={filteredData}
            />
            <div className="extention-list">
                {extentionList}
            </div>
        </>
    )
}