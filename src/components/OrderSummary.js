import React, { Component } from 'react';
import { connect } from "react-redux";
import { addArticle } from "../actions/article";

class OrderSummary extends Component {
    render() { 
        return (
            <div className='order-summary'>
                <div className='order-summary__heading'>
                    <h3>Your Order</h3>
                    <p>{new Date().toDateString()}</p>
                </div>
                <div className='order-summary__items'>
                    &nbsp;
                </div>
                <div className='order-summary__content'>
                    <div className='row-space-between'>
                        <div>
                            Subtotal
                        </div>
                        <div>
                            Rp. 222.727,00
                        </div>
                    </div>
                    <div className='row-space-between'>
                        <div>
                            Tax
                        </div>
                        <div>
                            Rp. 22.273,00
                        </div>
                    </div>
                    <div className='order-summary__total row-space-between bold'>
                        <div>
                            Total
                        </div>
                        <div>
                            Rp. 222.727,00
                        </div>
                    </div>
                    <div className='order-summary__btn'>
                        Order
                    </div>
                </div>
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