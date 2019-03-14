// Import react modules
import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';

// Import component stylesheet
import './Add.css';

// Temporary Subscribers list to receive and update subscribers
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

    // Handle change in Name field
    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    // Handle change in Phone field
    onPhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        });
    }

    // Handle Add Button press
    handleFormSubmit = () => {

        // Check if component was loaded from /add route or directly
        if(this.props.location.state === undefined){
            updatedSubscribers = [];
        } else{
            const { subscribers } = this.props.location.state; 
            updatedSubscribers = subscribers;
        }

        // Update the received list with new subscriber
        updatedSubscribers.push({
            name: this.state.name,
            phone: this.state.phone
        });

        this.setState({toDashboard: true});
    }

    render() {

        // Redirect to dashboard when addition completed
        if (this.state.toDashboard === true) {
            console.log(updatedSubscribers);
            return <Redirect to={{ pathname: '/', state: { subscribers: updatedSubscribers } }} />
        }

        // Create component for Submit Button
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

                { /* Name input field */ }
                <p className='field-label'>Name:</p>
                <input className='input-field' type="text" name="name" onChange= {this.onNameChange} />

                <br/>
                { /* Phone input field */ }
                <p className='field-label'>Phone:</p>
                <input className='input-field' type="number" name="phone" onChange= {this.onPhoneChange}/>
                
                <p className='display-label-top'> Subscriber to be added:</p>
                <br/>

                { /* Display live state values for Name and Phone number */ }
                <p className='display-label'>{`Name: ${this.state.name}`}</p>
                <p className='display-label'>{`Phone: ${this.state.phone}`}</p>
                <br/>
                
                <SubmitButton/>
            </form> 
        </div>
        );
    }
}
