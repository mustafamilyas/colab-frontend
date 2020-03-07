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
                    <div className="kitchen-todo__item kitchen-todo__item--done">
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
                    <div className="kitchen-todo__item">
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
                    <div className="kitchen-todo__item">
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
                    <div className="kitchen-todo__item">
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
                    <div className="kitchen-todo__item">
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
                    <div className="kitchen-todo__item">
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
                    <div className="kitchen-todo__item">
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
                    <div className="kitchen-todo__item">
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
                    <div className="kitchen-todo__item">
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
                    <div className="kitchen-todo__item">
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
                    <div className="kitchen-todo__item">
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
                    <div className="kitchen-todo__item">
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
                    <button className="kitchen-todo__action-btn kitchen-todo__action-btn--delete">
                        Delete
                    </button>
                    <button className="kitchen-todo__action-btn kitchen-todo__action-btn--primary">
                        Finish
                    </button>
                </div>
            </div>
        );
    }
}
 
export default KitchenTodo;