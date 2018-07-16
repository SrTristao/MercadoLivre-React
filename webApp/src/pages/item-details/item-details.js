import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import './item-details.css';

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {           
        }
    }
    
    render() {
        const { item_selected } = this.props;
        return (
            <div className='container item-details-container margin-items'>
                <div className="top">
                    <div>
                        <img alt="thumbnail" id="thumbnail" src={item_selected.thumbnail}/>
                    </div>
                    <div className="comprar">
                        <p className="detalhe"> Novo - 234 vendidos</p>
                        <p className="titulo"> {item_selected.title} </p>
                        <p className="preco"> <CurrencyFormat value={item_selected.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </p>
                        <button className="btn btn-primary"> COMPRAR </button>
                    </div>
                </div>                
                <div className="descricao">
                    <p className="titulo-descricao"> Descrição do Produto </p>
                    <div dangerouslySetInnerHTML={{__html: item_selected.description.plain_text}}></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { items } = state;
    const { item_selected} = items;
    return {
        item_selected
    }
}

export default withRouter(connect(mapStateToProps)(ItemDetails));