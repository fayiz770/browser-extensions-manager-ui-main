import logo from '../../public/logo.svg'
import themeToggle from '../../public/icon-moon.svg'
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
            <img
                className="theme-toggle" 
                src={themeToggle}
                alt="Toggle theme" 
            ></img>
        </header>
    )
}