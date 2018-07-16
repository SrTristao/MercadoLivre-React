import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './item-details.css';

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render() {
        return (
            <div className='item-details'>
                Hellow item-details !
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
  }

export default withRouter(connect(mapStateToProps)(ItemDetails));