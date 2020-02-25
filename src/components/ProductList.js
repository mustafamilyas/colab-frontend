import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
    state = {
        items: [
            {id: 1, name: 'Pizza', price: 20000, count: 0, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
            {id: 2, name: 'Pizza', price: 20000, count: 0, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
            {id: 3, name: 'Pizza', price: 20000, count: 0, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
            {id: 4, name: 'Pizza', price: 20000, count: 1, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
            {id: 5, name: 'Pizza', price: 20000, count: 2, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
            // {id: 6, name: 'Pizza', price: 20000, count: 2, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80'},
        ]
    }
    render() { 
        return (
            <div className='product-list'>
                <div className='product-list__header'>
                    <h2 className='product-list__heading'>{this.props.title}</h2>
                    <div className='product-list__subheading'>see more</div>
                </div>
                <div className='product-list__content'>
                    {this.state.items.map((item, id) =>(
                        <ProductItem 
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            count={item.count}
                            img={item.img}
                            key={id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
 
export default ProductList;