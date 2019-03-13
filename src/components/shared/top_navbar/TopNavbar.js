import React from 'react';
import { Link } from 'react-router-dom';

// Import component stylesheet
import './TopNavbar.css';

const TopNavbar = () => {

    return (
    <div className='navbar'>
        <ul>
            <li>
                <Link 
                    className = 'link' 
                    style={{ textDecoration: 'none' }}
                    to='/'
                >
                Phonebook Directory
                </Link>
            </li>
        </ul>
    </div>
    );
}

export default TopNavbar;
