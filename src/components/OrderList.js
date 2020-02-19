import React, { Component } from 'react';
import OrderItem from './OrderItem';

class OrderList extends Component {
    state = {
        items: [
            {id: 1, name: 'Pizza', price: 20000, count: 0, img: '#'},
            {id: 2, name: 'Pizza', price: 20000, count: 0, img: '#'},
            {id: 3, name: 'Pizza', price: 20000, count: 0, img: '#'},
            {id: 4, name: 'Pizza', price: 20000, count: 1, img: '#'},
            {id: 5, name: 'Pizza', price: 20000, count: 2, img: '#'},
        ]
    }
    render() { 
        return (
            <div className='order-list'>
                <div className='order-list__header'>
                    <h2 className='order-list__heading'>{this.props.title}</h2>
                    <div className='order-list__subheading'>see more</div>
                </div>
                <div className='order-list__content'>
                    {this.state.items.map(item =>(
                        <OrderItem 
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            count={item.count}
                            img={item.img}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
 
export default OrderList;