import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleModal } from "../../actions/order";
import Modal from '.';

class OrderIntro extends Component {
    handleSubmit = () => {
        this.props.toggleModal({modalState: 0, isModalShow: false})
    }

    render() { 
        return (
            <Modal>
                <div className='popup-order order-intro'>
                    <label className='order-intro__input'>
                        Your Name
                        <input type='text' placeholder='John Doe'/>
                    </label>
                    <label className='order-intro__input'>
                        Table Number
                        <input type='text' placeholder='C20'/>
                    </label>
                    <button className='order-intro__btn' onClick={this.handleSubmit}>
                        Submit
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
 
export default connect(mapStateToProps, mapDispatchToProps)(OrderIntro);
