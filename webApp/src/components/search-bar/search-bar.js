import React, { Component } from 'react';
import history from '../../provider/history';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getItems, cleanItems } from '../../store/actions/items';
import './search-bar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            searchItems: ''
        }
    }

    getItems(searchItems) {
        if(this.state.searchItems !== ''){
            this.state.getItems(searchItems);
            if (window.location.hash !== '#/items')
                history.push('/items')
        }        
    }

    goHome() {
        if (window.location.hash !== '#/') {
            history.push('/');
            this.setState({searchItems: ''})
            this.state.cleanItems();
        }            
    }

    handleChange(e) {
        this.setState({searchItems: e.target.value})
    }
    
    render() {
        return (
            <div className='search-bar-container container'>
                <div className="col-sm-10 input-search">
                    <div>
                        <img onClick={e => this.goHome()} alt="Logo Mercado Livre" className="logo"/>
                    </div>
                    <div>                        
                        <form>
                        <div className="input-group">    
                            <input type="text" className="form-control" value={this.state.searchItems} onChange={e => this.handleChange(e)}/>
                            <span onClick={e => this.getItems(this.state.searchItems)} className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-search"></i></span>
                        </div>
                        </form>    
                    </div>    
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getItems: searchItems => dispatch(getItems(searchItems)),
        cleanItems: () => dispatch(cleanItems())
    }
}


export default withRouter(connect(state => state, mapDispatchToProps)(SearchBar));