export default function MainHeader({ setFilteredData, selectedFilter }) {
    return(
        <div className="main-header">
            <h1>Extention Lists</h1>
            <div className="btns">
                <button
                    onClick={() => setFilteredData('all')}
                    className={`btn ${selectedFilter === 'all' ? 'selected' : ''}`}
                    id="all-btn"
                >All</button>
                <button
                    onClick={() => setFilteredData('active')} 
                    className={`btn ${selectedFilter === 'active' ? 'selected' : ''}`}
                    id="active-btn"
                >Active</button>
                <button
                    onClick={() => setFilteredData('inactive')} 
                    className={`btn ${selectedFilter === 'inactive' ? 'selected' : ''}`}
                    id="inactive-btn"
                >Inactive</button>
            </div>
        </div>
    )
}