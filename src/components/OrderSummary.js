import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleModal } from "../actions/article";
import OrderItem from './OrderItem';

class OrderSummary extends Component {
    state = {
        items: [
            {id: 1, name: 'Donut', price: 20000, count: 0, img: require('../assets/img/donut_springkle.png')},
            {id: 2, name: 'Donut', price: 20000, count: 1, img: require('../assets/img/donut_springkle.png')},
            {id: 3, name: 'Donut', price: 20000, count: 2, img: require('../assets/img/donut_springkle.png')},
            {id: 4, name: 'Donut', price: 20000, count: 3, img: require('../assets/img/donut_springkle.png')},
            {id: 5, name: 'Donut', price: 20000, count: 3, img: require('../assets/img/donut_springkle.png')},
            {id: 6, name: 'Donut', price: 20000, count: 3, img: require('../assets/img/donut_springkle.png')},
            {id: 7, name: 'Donut', price: 20000, count: 3, img: require('../assets/img/donut_springkle.png')},
            {id: 8, name: 'Donut', price: 20000, count: 3, img: require('../assets/img/donut_springkle.png')},
        ]
    }

    handleOrder = () => {
        // this.props.addArticle({title: 'ganteng'})
        this.props.toggleModal({modalState: 1, isModalShow: true})
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
                    <div className='order-summary__btn' onClick={this.handleOrder}>
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
      toggleModal: modalState => dispatch(toggleModal(modalState)),
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);