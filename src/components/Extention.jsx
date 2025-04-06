export default function Extention({icon, name, description, isActive}) {
    return(
        <div
            className="extention"
        >
            <div className="extention-info-container">
                <img 
                    className="extention-icon" 
                    src={icon}
                    alt="Logo"
                ></img>
                <div className="extention-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="btns">
                <button className="btn remove-btn">Remove</button>
                {   
                    isActive ? 
                    <button className="btn active"><div className="circle"></div></button> :
                    <button className="btn inactive"><div className="circle"></div></button>
                }
            </div>
        </div>
    )
}