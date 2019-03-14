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

    render() {

        console.log('Current Subscribers  : '+ this.state.subscribers.length);

        const AddButton = () => (
            <Link
                to={{ pathname: '/add', state: this.state }}
                className='submit-button'>
                <button
                    className='add-button'
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
            </div>
        </div>
        );
    }
}
