import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './items.css';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render() {
        return (
            <div className='items-container'>
                Hellow items !
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
  }

export default withRouter(connect(mapStateToProps)(Items));