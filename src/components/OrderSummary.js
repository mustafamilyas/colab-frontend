import React, { Component } from 'react';
import { connect } from "react-redux";
import { addArticle } from "../actions/article";

class OrderSummary extends Component {
    render() { 
        return (
            <div className='order-summary'>
                <h3>Your Order</h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
};

const mapDispatchToProps = dispatch => {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);