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
    
    const all = document.getElementById('all-btn')
    const active = document.getElementById('active-btn')
    const inactive = document.getElementById('inactive-btn')

    console.log(all)
    function allExtentions() {
        all.classList.add('selected')
        active.classList.remove('selected')
        inactive.classList.remove('selected')
        setFilteredData(data)
    }


    function activeExtentions() {
        const active = data.filter(extention => extention.isActive)
        all.classList.remove('selected')
        active.classList.add('selected')
        inactive.classList.remove('selected')
        setFilteredData(active)
    }


    function inactiveExtentions() {
        const inactive = data.filter(extention => !extention.isActive)
        all.classList.remove('selected')
        active.classList.remove('selected')
        inactive.classList.add('selected')
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