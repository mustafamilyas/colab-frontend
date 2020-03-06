import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleModal } from "../../actions/order";
import Modal from '.';
import SummaryItem from '../SummaryItem';

class OrderConfirm extends Component {
    handleSubmit = () =>{
        this.props.toggleModal({modalState: 2, isModalShow: true});
    }

    handleSubmit = () =>{
        this.props.toggleModal({modalState: 1, isModalShow: false});
    }

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
                            <div>{this.props.name}</div>
                        </div>
                        <div>
                            <div className='bold'>Table Number</div>
                            <div>{this.props.table}</div>
                        </div>
                    </div>
                    <div className='order-confirm__summary'>
                        {this.props.orders.length > 0 ? this.props.orders.map(item => (
                            <SummaryItem 
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                count={item.count}
                                price={item.price}
                            />
                        )) : 'You have no order'}
                    </div>
                    <div className='order-confirm__btn-group'>
                        <button className='order-confirm__btn order-confirm__btn--invert' onClick={this.handleClose}>
                            Cancel
                        </button>
                        <button className='order-confirm__btn order-confirm__btn--primary' onClick={this.handleSubmit}>
                            Submit My Order
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
};

const mapDispatchToProps = dispatch => {
    return {
      toggleModal: modalState => dispatch(toggleModal(modalState))
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirm);
