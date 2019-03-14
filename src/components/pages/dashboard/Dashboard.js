// Import React modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Component Style
import './Dashboard.css';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subscribers: []
        };
    }

    componentDidMount() {
        
        // Check if component was loaded from /add route or directly
        if(this.props.location.state === undefined){
            this.setState({ subscribers:[] });
        } else{
            const { subscribers } = this.props.location.state; 
            this.setState({ subscribers });
        }
    }

    // Handle Delete button press
    removeSubscriber = (subscriber) => {
        const { subscribers } = this.state;
        const updatedSubs = [];

        // Populate array with all subscribers except the one to be deleted
        subscribers.forEach(sub => {
            if(sub.name != subscriber.name) {
                updatedSubs.push(sub);
            }
        });

        // setState with updated array
        this.setState({
            subscribers: updatedSubs
        });
    }

    render() {

        // ES6 destructuring
        const { subscribers } = this.state;

        // console.log('Current Subscribers Count : '+ this.state.subscribers.length);

        // Create a Button Component which routes to Add page
        const AddButton = () => (
            <Link
                to={{ pathname: '/add', state: this.state }}
                >
                <button
                    className='button-add'
                    type="button" 
                >
                    ADD
                </button>
            </Link>
        );

        return (
        <div className='dashboard'>
            <AddButton/>

            { /* Create Column Labels above values */ }
            <div className="container">
                <div className="name">
                    NAME
                </div>
                <div className="phone">
                    PHONE
                </div>
                <div className="delete-buttons">
                </div>
            </div>

            { /* Populate values in columns */ }
            
            { subscribers.map(subscriber => {
                return (
                    <div className="container-values">
                        <div className="name-value">
                            { subscriber.name }
                        </div>
                        <div className="phone-value">
                            { subscriber.phone }
                        </div>
                        <div className="delete-buttons">
                            <button 
                                className='button-delete'
                                onClick={ ()=> {
                                    this.removeSubscriber(subscriber);
                                } }
                                >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            }) }
        </div>
        );
    }
}
