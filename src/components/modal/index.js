import React, { Component } from 'react';

class Modal extends Component {
    render() {
        // const IS_ACTIVE = this.props.active;
        const IS_ACTIVE = true;

        return (
            <div className={`modal ${IS_ACTIVE ? '' : 'disable'}`}>
                <div className='modal__content'>
                    { this.props.children }
                </div>
            </div>
        );
    }
}
 
export default Modal;