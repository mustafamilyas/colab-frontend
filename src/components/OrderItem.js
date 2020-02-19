import React, { Component } from 'react';

class OrderItem extends Component {
    render() { 
        const {id, name, price, count, img} = this.props;

        return (
            <div className='order-item'>
                <div className='order-item__img-wrapper'>
                    <img className='order-item__img' src={img} alt={"Picture of " + name}/>
                </div>
                <div className='order-item__desc'>
                    <div className='order-item__name'>{name}</div>
                    <div className='order-item__price'>{price}</div>
                </div>
                <div className='order-item__counter'>
                    <input className='order-item__counter-input' type='number' min='0' value={count}/>
                </div>
            </div>
        );
    }
}
 
export default OrderItem;