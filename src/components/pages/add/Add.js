import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';

import './Add.css';

let updatedSubscribers = [];

export default class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone:'',
            toDashboard: false
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

    handleFormSubmit = () => {
        const { subscribers } = this.props.location.state;

        updatedSubscribers = subscribers;
        updatedSubscribers.push({
            name: this.state.name,
            phone: this.state.phone
        });

        this.setState({toDashboard: true});
    }

    render() {

        if (this.state.toDashboard === true) {
            console.log(updatedSubscribers);
            return <Redirect to={{ pathname: '/', state: { subscribers: updatedSubscribers } }} />
        }

        const SubmitButton = () => {
            return (
                    <button
                        className='button-add'
                        type="button" 
                        onClick={this.handleFormSubmit}
                    >
                        ADD
                    </button>
            );
        }

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
