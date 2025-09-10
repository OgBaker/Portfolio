import { useState } from "react"
import { navLinks } from "../constants";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={() => {}}>
                        {name}
                    </a>
                
                     </li>
                
            ))}
        </ul>
    )
}

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }
    
    return (
   <header className="tex-fixed top-0 lef-0 right-0 z-50 w-full bg-black/90"> 
   <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-between py-5 mx-auto c-space">
        <a href="/" className="text-neutral-400 font-semibold text-xl hover:text-white transition-colors ">
        oleg bekker
        </a>
        <button onClick={toggleMenu}
        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
            <img src={isOpen ? "public/Close.svg" : "/Menu.svg"} 
            alt="toggle" className="w-6 h-6" /> 
        </button>
        <nav className="sm:flex hidden">
            <NavItems  />
        </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
            <nav className = "p-5 ">
            <NavItems />
             </nav>
        </div>

     </header>
          )
    }

    export default Navbar