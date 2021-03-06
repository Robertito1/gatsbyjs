import React, {useState} from 'react';
import '../styles/navbar.css'

const Navbar = () => {

    const [open, setOpen] = useState(false)
    let isOpen = open ? 'open' : ''
    let shouldAnimate = open ? 'fade' : ''
    return ( 
     <nav className='rounded-md mb-8'>
        <div className="hamburger" onClick={()=> setOpen(!open)} onKeyDown={()=> setOpen(!open)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div className="text-white">
          logo
        </div>
        <ul className={'nav-links' + ' ' + isOpen}>
            <li  onClick={()=> setOpen(!open)} className={shouldAnimate}><a href="#">Projects</a></li>
            <li onClick={()=> setOpen(!open)} className={shouldAnimate}><a href="#">Blog</a></li>
            <li onClick={()=> setOpen(!open)} className={shouldAnimate}><a href="#">Contact</a></li>
        </ul>
    </nav>
     );
}
 
export default Navbar;