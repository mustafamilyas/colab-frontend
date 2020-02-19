import React, { Component } from 'react';
import OrderSummary from '../components/OrderSummary';
import OrderList from '../components/OrderList';

class Order extends Component {
    render() { 
        return (
            <div className='order'>
                <div className='order-content'>
                    <header className='order-header'>
                        <h1 className='order__heading'>Welcome to Colab</h1>
                        <input type='text' className='order__input--search'/>
                    </header>
                    <div className='order-suggestion'>
                        <div className='order-suggestion__item'>Drink</div>
                        <div className='order-suggestion__item'>Food</div>
                        <div className='order-suggestion__item'>Dessert</div>
                    </div>
                    <OrderList
                        title="Our Best Selling Product"
                    />
                    <OrderList
                        title="Our Recommendation"
                    />
                </div>
                <OrderSummary />
            </div>
        );
    }
}
 
export default Order;