import MainHeader from './MainHeader.jsx'
import Extention from './Extention.jsx'
import data from '../../data.json'
export default function Main() {
    const extentionList = data.map((extention, index) => (
        <Extention
            key={index}
            icon={extention.logo}
            name={extention.name}
            description={extention.description}
            isActive={extention.isActive}
            id={crypto.randomUUID()}
        /> 
    ))
    return(
        <>
            <MainHeader />
            {extentionList}
        </>
    )
}