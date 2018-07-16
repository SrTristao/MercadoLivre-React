import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getItemDetails } from '../../store/actions/items';
import './item-details.css';

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {           
        }
    }

    componentDidMount() {
        const id = this.props.location.pathname.replace(/\/items\//, '');
        if (id !== undefined && (this.props.item_selected.id !== undefined && this.props.item_selected.id !== id))
            this.props.getItemDetails(id);

    }
    
    render() {
        const { item_selected } = this.props;
        if (item_selected.id)
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

        return (<div></div>)
    }
}

function mapStateToProps(state) {
    const { items } = state;
    const { item_selected} = items;
    return {
        item_selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getItemDetails: id => dispatch(getItemDetails(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDetails));