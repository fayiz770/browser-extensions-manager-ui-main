export default function Extention({icon, name, description, isActive}) {
    return(
        <div
            className="extention"
        >
            <img 
                className="extention-icon" 
                src={icon}
                alt="Logo"
            ></img>
            <div className="extention-info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div>
                <button className="btn remove-btn">Remove</button>
                <button className="btn toggle-btn">{isActive ? "Disable" : "Enable"}</button>
            </div>
        </div>
    )
}