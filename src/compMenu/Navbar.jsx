import React from 'react'
import { Link } from 'react-router-dom'
import "./compmenu.css"
import { BsApple } from 'react-icons/bs';

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul className='parent-nav'>
                    <li><Link to='*'><BsApple className='apple-icon' /></Link></li>
                    <li><Link to='/Mac' className='navbar-link'>Mac</Link></li>
                    <li><Link to='/Ipad' className='navbar-link'>iPad</Link></li>
                    <li><Link to='/Phone' className='navbar-link'>iPhone</Link></li>
                    <li><Link to='/Onlyapphone' className='navbar-link'>Only on Apple</Link></li>
                </ul>
            </nav>
        </div>
    )
}



