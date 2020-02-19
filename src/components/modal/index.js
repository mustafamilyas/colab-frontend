import React, { Component } from 'react';

class Modal extends Component {
    render() {
        const IS_ACTIVE = this.props.active;

        return (
            <div className={IS_ACTIVE ? '' : 'disable'}>
                { this.props.children }
            </div>
        );
    }
}
 
export default Modal;