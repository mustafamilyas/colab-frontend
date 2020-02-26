import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleModal } from "../../actions/article";
import Modal from '.';

class OrderSuccess extends Component {
    handleSubmit = () => {
        this.props.toggleModal({modalState: 0, isModalShow: true})
    }

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
                    <button className='order-success__btn' onClick={this.handleSubmit}>
                        Order Again
                    </button>
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
      toggleModal: modalState => dispatch(toggleModal(modalState)),
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccess);
