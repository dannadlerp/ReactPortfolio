import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
//import { MdOutlineClose } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const navbarRef = useRef(null);

    const toggleSidebar = () => setSidebar(prevState => !prevState); // Toggle function

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebar && navbarRef.current && !navbarRef.current.contains(event.target)) {
                setSidebar(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [sidebar]);

    return (
        <React.Fragment>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar" ref={navbarRef}>
                    <Link to="#" className="menu-bars">
                        <FaBars onClick={toggleSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    {sidebar && (
                        <ul className='nav-menu-items'>

                            {SidebarData.map((item, index) => (
                                <li key={index} className={item.cName} onClick={toggleSidebar}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </nav>
            </IconContext.Provider>
        </React.Fragment>
    );
}

export default Navbar;
