import React, { Component } from 'react';
import Modal from '.';

class OrderConfirm extends Component {
    render() { 
        return (
            <Modal>
                <div className='popup-order order-confirm'>
                    <div className='order-confirm__title'>
                        Order Summary
                    </div>
                    <div className='order-confirm__consument'>
                        <div>
                            <div className='bold'>Your Name</div>
                            <div>Ilyas</div>
                        </div>
                        <div>
                            <div className='bold'>Table Number</div>
                            <div>C12</div>
                        </div>
                    </div>
                    <div className='order-confirm__summary'>
                        &nbsp;
                    </div>
                    <div className='order-confirm__btn-group'>
                        <button className='order-confirm__btn order-confirm__btn--invert'>
                            Cancel
                        </button>
                        <button className='order-confirm__btn order-confirm__btn--primary'>
                            Submit My Order
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}
 
export default OrderConfirm;