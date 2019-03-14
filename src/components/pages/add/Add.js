import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Add.css';

export default class Add extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            phone:''
        };
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onPhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        });
    }

    render() {
        const SubmitButton = () => (
            <Link
                to={{ pathname: '/', state: { name: this.state.name, phone: this.state.phone} }}
                className='submit-button'>
                <button
                    className='add-button'
                    type="button" 
                    onClick={()=>{}}
                >
                    ADD
                </button>
            </Link>
        );

        return (
        <div className='add-page'>
            <Link 
                to='/'
                className='back-link'>
                BACK
            </Link>

            <form className='add-form'>

                <p className='field-label'>Name:</p>
                <input className='input-field' type="text" name="name" onChange= {this.onNameChange} />

                <br/>
                
                <p className='field-label'>Phone:</p>
                <input className='input-field' type="number" name="phone" onChange= {this.onPhoneChange}/>
                
                <p className='display-label-top'> Subscriber to be added:</p>
                <br/>
                <p className='display-label'>{`Name: ${this.state.name}`}</p>
                <p className='display-label'>{`Phone: ${this.state.phone}`}</p>
                <br/>
                
                <SubmitButton/>
            </form> 
        </div>
        );
    }
}
