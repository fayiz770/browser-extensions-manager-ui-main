import logo from '../assets/images/logo.svg'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'
export default function Header({toggleDarkMode, darkMode}) {
    return(
        <header
            className="header"
        >
            <img 
                className="logo" 
                src={logo}
                alt="Logo"
            ></img>
            <button
                onClick={toggleDarkMode}
            >
                <img
                    className="theme-toggle" 
                    src={darkMode ? moon : sun}
                    alt="Toggle theme" 
                ></img>
            </button>
        </header>
    )
}

