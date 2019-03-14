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

        if(this.props.location.state === undefined){
            this.setState({ subscribers:[] });
        } else{
            const { subscribers } = this.props.location.state; 
        this.setState({ subscribers });
        }
    }

    removeSubscriber = (subscriber) => {

        const { subscribers } = this.state;
        const updatedSubs = [];

        subscribers.forEach(sub => {
            if(sub.name != subscriber.name) {
                updatedSubs.push(sub);
            }
        });

        this.setState({
            subscribers: updatedSubs
        });
    }

    render() {
        const { subscribers } = this.state;
        console.log('Current Subscribers Count : '+ this.state.subscribers.length);

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

            { subscribers.map(subscriber => {
                return (
                    <div className="container">
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
