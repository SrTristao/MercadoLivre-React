import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getItemDetails } from '../../store/actions/items';

import './item.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {    
        }
    }

    getItem(id) {
        this.props.getItemDetails(id);        
    }
    
    
    render() {
        const { item } = this.props;
        return (
            <div onClick={e => this.getItem(item.id)} key={`item-${item.title}`} className="item-container">            
                <div id="foto">
                    <img alt="thumbnail" id="thumbnail" src={item.thumbnail}/>
                </div>
                <div className="descricao">
                    <p className="preco"> <CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </p>
                    <p> { item.title } </p>
                    <p> Completo Único </p>
                </div>
                <div className="cidade">
                    <p> { item.address.city_name } </p>
                </div>            
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getItemDetails: id => dispatch(getItemDetails(id))
    }
}

export default withRouter(connect(state => state, mapDispatchToProps)(Item));