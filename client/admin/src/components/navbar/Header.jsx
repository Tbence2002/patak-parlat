import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"
import {AiOutlineHome} from 'react-icons/ai'
import {BiNews} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'
import { MdLogout } from "react-icons/md";
import Cookies from 'js-cookie';

function Header() {

  const handleQuit = ()=> {
    Cookies.remove('token');
  }
  return (
    <div className='header-container'>
        <header>
            <nav>
                <ul>
                  <div className='tooltip home-tooltip'>
                    <li className='home'><Link to="/"><AiOutlineHome/></Link></li>
                    <span>Kezdőlap</span>
                  </div>
                  <div className='tooltip news-tooltip'>
                    <li className='news'><Link to="/News"><BiNews/></Link></li>
                    <span>Hírek</span>
                  </div>
                  <div className='tooltip members-tooltip'>
                    <li className='members'><Link to="/Members"><BsPeople/></Link></li>
                    <span>Tagok</span>
                  </div>
                  <div className='tooltip logout-tooltip'>
                    <li className='logout'><Link to="/login"><MdLogout onClick={handleQuit} /></Link></li>
                    <span>Kilépés</span>
                  </div>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header