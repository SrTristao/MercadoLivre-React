import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import ListItem from '../../components/list-item/list-item';
import './items.css';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {        
        const { itemsArr, item_selected } = this.props;
        if (item_selected.id !== undefined) {
            return <Redirect to={`/items/${item_selected.id}`}/>
        }

        return (
            <div className='items-container'>
                <ListItem list={itemsArr}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { items } = state;
    const { itemsArr, item_selected } = items
    return {
        itemsArr,
        item_selected
    }
  }

export default withRouter(connect(mapStateToProps)(Items));