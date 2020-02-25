import React, { Component } from 'react';
import OrderSummary from '../components/OrderSummary';
import ProductList from '../components/ProductList';

class Order extends Component {
    render() { 
        return (
            <div className='order'>
                <div className='order-content'>
                    <header className='order-header'>
                        <h1 className='order__heading'>Welcome to Colab</h1>
                        <input type='text' className='order__input--search' placeholder='Search your favorite food'/>
                    </header>
                    <div className='order-suggestion'>
                        <div className='order-suggestion__item'>Drink</div>
                        <div className='order-suggestion__item'>Food</div>
                        <div className='order-suggestion__item'>Dessert</div>
                    </div>
                    <ProductList
                        title="Our Best Selling Product"
                    />
                    <ProductList
                        title="Our Recommendation"
                    />
                </div>
                <OrderSummary />
            </div>
        );
    }
}
 
export default Order;