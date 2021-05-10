import React, {useState} from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import '../styles/navbar.css'

const Navbar = () => {

    const [open, setOpen] = useState(false)
    let isOpen = open ? 'open' : ''
    let shouldAnimate = open ? 'fade' : ''
    return ( 
     <nav className='rounded-md mb-8 px-8 md:px-20 lg:px-30'>
        <div className="hamburger" role="button" tabIndex={0} onClick={()=> setOpen(!open)} onKeyDown={()=> setOpen(!open)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <Link to="/">
          <StaticImage src="../images/logo.png" width={70} quality={95} alt="A dinosaur" className='p-0' /> 
        </Link>
        <ul className={`nav-links  ${isOpen}`}>
            <li className={shouldAnimate}><Link to="/" onClick={()=> setOpen(!open)}>Home</Link></li>
            <li className={shouldAnimate}><Link to="/#skills" onClick={()=> setOpen(!open)}>Skills</Link></li>
            <li className={shouldAnimate}><Link to="/#projects" onClick={()=> setOpen(!open)}>Projects</Link></li>
            <li className={shouldAnimate}><Link to="/blogs" onClick={()=> setOpen(!open)}>Blog</Link></li>
        </ul>
    </nav>
     );
}
 
export default Navbar;