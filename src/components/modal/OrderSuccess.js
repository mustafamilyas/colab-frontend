import React, { Component } from 'react';
import Modal from '.';

class OrderSuccess extends Component {
    render() { 
        return (
            <Modal>
                <div className='popup-order'>
                    <div className='order-success__heading'>
                        Thank You!
                    </div>
                    <div className='order-success__subheading'>
                        Your order will be delivered shortly
                    </div>
                    <div className='order-success__annotation'>
                        <div className='bold'>Order Number</div>
                        <div className='order-success__number'>213</div>
                    </div>
                    <button className='order-success__btn'>
                        Order Again
                    </button>
                </div>
            </Modal>
        );
    }
}
 
export default OrderSuccess;