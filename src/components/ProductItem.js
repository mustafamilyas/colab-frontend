import React, { Component } from 'react';

class ProductItem extends Component {
    render() { 
        const {id, name, price, count, img} = this.props;

        return (
            <div className='product-item'>
                <div className='product-item__img-wrapper'>
                    <img className='product-item__img' src={img} alt={"Picture of " + name}/>
                </div>
                <div className='product-item__desc'>
                    <div className='product-item__name'>{name}</div>
                    <div className='product-item__price'>{price}</div>
                </div>
                <div className='product-item__counter'>
                    <input className='product-item__counter-input' type='number' min='0' value={count}/>
                </div>
                &nbsp;
            </div>
        );
    }
}
 
export default ProductItem;