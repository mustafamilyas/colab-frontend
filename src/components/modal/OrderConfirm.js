import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleModal } from "../../actions/order";
import Modal from '.';

class OrderConfirm extends Component {
    handleSubmit = () =>{
        this.props.toggleModal({modalState: 2, isModalShow: true});

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
