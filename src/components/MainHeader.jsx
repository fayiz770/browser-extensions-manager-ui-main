export default function MainHeader({ allExtentions, activeExtentions, inactiveExtentions }) {
    return(
        <div className="main-header">
            <h1>Extention Lists</h1>
            <div className="btns">
                <button
                    onClick={allExtentions}
                    className="btn">All</button>
                <button
                    onClick={activeExtentions} 
                    className="btn">Active</button>
                <button
                    onClick={inactiveExtentions} 
                    className="btn">Inactive</button>
            </div>
        </div>
    )
}