import { useState } from 'react';
import {FaBars} from 'react-icons/fa';

import {Link} from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';

import './header.styles.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        
    }

    return(
        <nav className='head_cont'>
            <div className='header_container'>
            
                <Link to='/' className='header_logo' onClick={scrollToTop}>VideoPlayer</Link>
                <FaBars className='nav_toggle' onClick={toggle}/>
        
                <div className={ isOpen ? "header_links_open" : "header_links"} >
                    <ul>
                        <Link to='/videos' className='link'  onClick={toggle}>Videos</Link>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header;