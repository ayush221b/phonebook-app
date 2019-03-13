import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import component stylesheet
import './TopNavbar.css';

export default class TopNavbar extends Component {
    render() {
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
        )
    }
}