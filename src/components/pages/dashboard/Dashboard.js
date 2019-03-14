import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

// Import Component Style
import './Dashboard.css';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subscribers : []
        }
    }

    componentDidMount() {
        const subscribers = this.state.subscribers.push({
            name: this.props.location.state.name, 
            phone: this.props.location.state.phone
        });
        
        this.setState({subscribers});
    }

    onAddButtonClick = () => {
        alert('Add button was clicked');
    }

    render() {
        const Button = withRouter(({ history }) => (
            <button
                className='add-button'
                type="button" 
                onClick={() => { history.push('/add') }}
            >
                ADD
            </button>
        ));

        return (
        <div className='dashboard'>
            <Button/>
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
