import React, { Component } from 'react';
import Item from '../item/item';
import './list-item.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {          
        }
    }        
    
    render() {
        const { list } = this.props;
        return (
            <div className="container list-item-container margin-items">            
                <div className="line">
                    {list.map((item, index) => <Item key={index} item={item}/>)}
                </div>
            </div>
        )
    }
}



export default ListItem;