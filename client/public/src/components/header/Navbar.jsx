import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { RiMenu4Fill } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';

function Navbar() {
    const [menu, setMenu] = useState(false);

    return (
            <div className='navbar-container'>
                <header>
                    <div className='logo'>
                        <p>Patak-Párlat</p>
                    </div>
                    <i className='open' onClick={() => setMenu(!menu)}><RiMenu4Fill /></i>
                    <nav>
                        <ul className={menu ? "shownavbar" : ""}>
                            <div className="menu-title">
                            <i>Patak-Párlat</i>
                            <i className="close" onClick={() => setMenu(!menu)}><GrClose /></i>
                            </div>
                            <li><Link to="/">Kezdőlap</Link></li>
                            <li><Link to="/MyGallery">Galéria</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
    )
}

export default Navbar