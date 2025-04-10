export default function Extention({icon, name, description, isActive, id, data, setData}) {
    function toggle(){
        isActive ? activate() : inactivate()
        const btn = document.getElementById('I' + id)
        btn.classList.contains('active') 
            ? btn.classList.replace('active', 'inactive') 
            : btn.classList.replace('inactive', 'active')
    }
    function remove(){
        const newData = data.filter(extention => extention.name !== name)
        setData(newData)
    }

    function activate() {
        const newData = data.filter(extention => 
            extention.name === name ? { ...extention, isActive: true } : extention
        );
        setData(newData);
    }

    function inactivate() {
        const newData = data.filter(extention => 
            extention.name === name ? { ...extention, isActive: false } : extention
        );
        setData(newData);
    }

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
            <div>
                <button
                    onClick={remove} 
                    className="btn remove-btn">Remove</button>
                <button
                    onClick={toggle}
                    id={'I' + id} 
                    className={`status-toggle-btn ${isActive ? 'active' : 'inactive'}`}
                >
                    <div className="circle"></div>
                </button>
            </div>
        </div>
    )
}