import React, { Component } from 'react';
import Modal from '.';

class OrderIntro extends Component {
    render() { 
        return (
            <Modal>
                <div className='order-intro'>
                    <label className='order-intro__input'>
                        Your Name
                        <input type='text'/>
                    </label>
                    <label className='order-intro__input'>
                        Table Number
                        <input type='text'/>
                    </label>
                    <button className='order-intro__btn'>
                        Submit
                    </button>
                </div>
            </Modal>
        );
    }
}
 
export default OrderIntro;