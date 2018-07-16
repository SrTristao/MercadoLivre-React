import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import history from '../../provider/history';
import routes from '../../provider/sub-routes';
import SearchBar from '../../components/search-bar/search-bar';
import Loadable from 'react-loading-overlay';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render() {
        return (
            <div className='home-container'>
                <Loadable 
                active={this.props.isFetchingItems}
                spinner
                text={'Procurando items...'}>
                    <SearchBar/>  
                    <Provider store={store}>
                        <ConnectedRouter history={history}>
                            {routes}
                        </ConnectedRouter>
                    </Provider>
                </Loadable>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { items } = state;
    const { isFetchingItems } = items;
    return {
        isFetchingItems        
    }
}

export default withRouter(connect(mapStateToProps)(Home));