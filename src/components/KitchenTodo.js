import React, { Component } from 'react';
import { formatMoney } from "../utils/format";

class KitchenTodo extends Component {
    render() { 
        // let {img, name, count, price} = this.props;
        return (
            <div className='kitchen-todo'>
                <div className="kitchen-todo__number">#21321</div>
                <div className="kitchen-todo__header">
                    <div>
                        Sayli
                    </div>
                    <div>
                        C105
                    </div>
                </div>
                <div className="kitchen-todo__items">
                    <div className="kichen-todo__item kichen-todo__item--active">
                        <div className="kitchen-todo__item-name">
                            Salad Dalas
                        </div>
                        <div className="kitchen-todo__item-attr">
                            <div className="kitchen-todo__item-attr--num">
                                x1
                            </div>
                            <div className="kitchen-todo__items-attr--status">
                                v
                            </div>
                        </div>
                    </div>
                    <div className="kichen-todo__item">
                        <div className="kitchen-todo__item-name">
                            Salad Dalas
                        </div>
                        <div className="kitchen-todo__item-attr">
                            <div className="kitchen-todo__item-attr--num">
                                x1
                            </div>
                            <div className="kitchen-todo__items-attr--status">
                                v
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kitchen-todo__action">
                    <div className="kitchen-todo__action-btn">
                        Delete
                    </div>
                    <div className="kitchen-todo__action-btn">
                        Finish
                    </div>
                </div>
            </div>
        );
    }
}
 
export default KitchenTodo;