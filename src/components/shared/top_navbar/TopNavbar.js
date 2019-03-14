// Import react modules
import React from 'react';
import { withRouter } from 'react-router-dom';

// Import component stylesheet
import './TopNavbar.css';

class TopNavbar extends React.Component{
    render(){
        const { pathname } = this.props.location; 
        return (
        <div className='navbar'>
            <ul>
                <li className = 'link'>
                    { /* Check for route before populating navbar */}
                    {pathname === '/' ? 'Phonebook Directory' : 'Add Subscriber'}
                </li>
            </ul>
        </div>
        );
    }   
}

export default withRouter(props => <TopNavbar {...props}/>);
