import React, { Component } from 'react';
import './page-error.css';

class PageError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageType: 'ServiceError'
        }
    }

    componentWillMount() {
        let pageType = this.props.location.search.substring(1);
        this.setState({pageType})
    }
    
    showNotFound() {
        return (
            <div>
                <p className="titulo" > Não há anúncios que coincidam com a sua busca. </p>   
                <ul>
                    <li>Revise a ortografia da palavra.</li>
                    <li>Utilize palavras mais genéricas ou menos palavras.</li>
                    <li>Navegue pela categoria de produtos para encontrar um produto semelhante.</li>
                </ul>  
            </div>
        )
    }

    showServiceError() {
        return (
            <div>
                <p className="titulo"> Ops!, ocorreu um erro, tente novamente mais tarde !</p>
            </div>
        )
    }

    render() {
        
        return (
            <div className='container page-error-container margin-top'>                
                {this.state.pageType === 'ServiceError' ? this.showServiceError() : this.showNotFound()}                                  
            </div>
        )
    }
}


export default PageError;