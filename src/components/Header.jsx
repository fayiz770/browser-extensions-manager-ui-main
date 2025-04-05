import logo from '../assets/images/logo.png'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'
export default function Header({toggleDarkMode, darkMode}) {
    return(
        <header
            className="header"
        >
            <div className="logo-container">
                <img 
                    className="logo" 
                    src={logo}
                    alt="Logo"
                ></img>
                <h2 className='header-title'>Extentions</h2>
            </div>
            <button
                onClick={toggleDarkMode}
                className="toggle-btn"
            >
                <img
                    src={darkMode ? sun : moon}
                    alt="Toggle theme" 
                ></img>
            </button>
        </header>
    )
}

