import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Import component stylesheet
import './TopNavbar.css';

class TopNavbar extends React.Component{
    render(){
        
        const { pathname } = this.props.location; 
        return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link 
                        className = 'link' 
                        style={{ textDecoration: 'none' }}
                        to='/'
                    >
                    {pathname === '/' ? 'Phonebook Directory' : 'Add Subscriber'}
                    </Link>
                </li>
            </ul>
        </div>
        );
    }   
}

export default withRouter(props => <TopNavbar {...props}/>);
