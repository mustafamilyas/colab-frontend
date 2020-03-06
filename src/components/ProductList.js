import React, { Component } from 'react';
import { connect } from "react-redux";
import ProductItem from './ProductItem';
import { addOrder } from "../actions/order";

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {id: 1, name: 'Donut', price: 20000, count: 1, img: require('../assets/img/donut_springkle.png')},
                {id: 2, name: 'Donut', price: 20000, count: 1, img: require('../assets/img/donut_springkle.png')},
                {id: 3, name: 'Donut', price: 20000, count: 1, img: require('../assets/img/donut_springkle.png')},
                {id: 4, name: 'Donut', price: 20000, count: 1, img: require('../assets/img/donut_springkle.png')},
                {id: 5, name: 'Donut', price: 20000, count: 1, img: require('../assets/img/donut_springkle.png')},
                // {id: 6, name: 'Pizza', price: 20000, count: 2, img: require('../assets/img/donut_springkle.png')},
            ]
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (item) => {
        console.log('test')
        this.props.addOrder(item)
    }

    render() { 
        return (
            <div className='product-list'>
                <div className='product-list__header'>
                    <h2 className='product-list__heading'>{this.props.title}</h2>
                    <div className='product-list__subheading'>see more</div>
                </div>
                <div className='product-list__content'>
                    {this.state.items.map((item) =>(
                        <ProductItem 
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            count={item.count}
                            img={item.img}
                            key={item.id}
                            onClick={()=>{this.handleClick(item)}}
                        />
                    ))}
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
      addOrder: payload => dispatch(addOrder(payload)),
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
