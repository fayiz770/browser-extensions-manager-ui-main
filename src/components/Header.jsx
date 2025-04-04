import logo from '../assets/images/logo.svg'
import themeToggle from '../assets/images/icon-moon.svg'
export default function Header() {
    return(
        <header
            className="header"
        >
            <img 
                className="logo" 
                src={logo}
                alt="Logo"
            ></img>
            <button>
                <img
                    className="theme-toggle" 
                    src={themeToggle}
                    alt="Toggle theme" 
                ></img>

            </button>
        </header>
    )
}

