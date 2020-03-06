import React, { Component } from 'react';
import KitchenQueue from '../components/KitchenQueue';
import KitchenTodo from '../components/KitchenTodo';

class Kitchen extends Component {
    
    render() { 
        return (
            <div className="kitchen">
                <div className="kitchen__todo">
                    <h2>Process Queue</h2>
                    <div className="kitchen__list kitchen__list--process">
                        <KitchenTodo />
                    </div>
                </div>

                <div className="kitchen__queue">
                    <h2>Order Queue</h2>
                    <div className="kitchen__list kitchen__list--order">
                        <KitchenQueue />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Kitchen;