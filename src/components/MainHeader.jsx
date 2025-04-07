export default function MainHeader({ allExtentions, activeExtentions, inactiveExtentions }) {
    return(
        <div className="main-header">
            <h1>Extention Lists</h1>
            <div className="btns">
                <button
                    onClick={allExtentions}
                    className="btn"
                    id="all-btn"
                >All</button>
                <button
                    onClick={activeExtentions} 
                    className="btn"
                    id="active-btn"
                >Active</button>
                <button
                    onClick={inactiveExtentions} 
                    className="btn"
                    id="inactive-btn"
                >Inactive</button>
            </div>
        </div>
    )
}