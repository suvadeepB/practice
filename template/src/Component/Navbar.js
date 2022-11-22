import { useRef } from 'react'
import { Link } from "react-router-dom";
import logo from "../../src/Images/logo.png";
function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <div className='mainmenu'>
                <div className='logoarea'>
                    <img src={logo} className="img-fluid" />
                </div>
                <div className='menuitem'>
                    <ul ref={navRef}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Products</Link>
                        </li>
                        <li>
                            <Link to="/">Services</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}><i class="fa-solid fa-bars"></i></button>
                    <button className="nav-btn" onClick={showNavbar}><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
        </header>
    )
}

export default Navbar