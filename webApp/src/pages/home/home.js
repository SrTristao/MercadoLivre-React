import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='home-container'>
                Hellow home !
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default withRouter(connect(mapStateToProps)(Home));