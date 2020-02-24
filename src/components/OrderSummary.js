import React, { Component } from 'react';
import { connect } from "react-redux";
import { addArticle } from "../actions/article";
import OrderItem from './OrderItem';

class OrderSummary extends Component {
    state = {
        items: [
            {id: 1, name: 'Pizza', price: 20000, count: 0, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
            {id: 2, name: 'Pizza', price: 20000, count: 1, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
            {id: 3, name: 'Pizza', price: 20000, count: 2, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
            {id: 4, name: 'Pizza', price: 20000, count: 3, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
            {id: 5, name: 'Pizza', price: 20000, count: 3, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
            {id: 6, name: 'Pizza', price: 20000, count: 3, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
            {id: 7, name: 'Pizza', price: 20000, count: 3, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
            {id: 8, name: 'Pizza', price: 20000, count: 3, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
        ]
    }
    render() { 
        return (
            <div className='order-summary'>
                <div className='order-summary__heading'>
                    <h3>Your Order</h3>
                    <p>{new Date().toDateString()}</p>
                </div>
                <div className='order-summary__items'>
                    {this.state.items.map(item => (
                        <OrderItem 
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            count={item.count}
                            price={item.price}
                        />
                    ))}
                </div>
                <div className='order-summary__content'>
                    <div className='row-space-between'>
                        <div>
                            Subtotal
                        </div>
                        <div>
                            Rp. 222.727,00
                        </div>
                    </div>
                    <div className='row-space-between'>
                        <div>
                            Tax
                        </div>
                        <div>
                            Rp. 22.273,00
                        </div>
                    </div>
                    <div className='order-summary__total row-space-between bold'>
                        <div>
                            Total
                        </div>
                        <div>
                            Rp. 222.727,00
                        </div>
                    </div>
                    <div className='order-summary__btn'>
                        Order
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
};

const mapDispatchToProps = dispatch => {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);