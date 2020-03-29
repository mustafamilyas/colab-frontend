import React from 'react';
import { formatMoney } from "../utils/format";

const KitchenTodo = (props) => {
    const {id, name, table, orders} = props.todo;
    return (
        <div className='kitchen-todo'>
            <div className="kitchen-todo__number">#21321</div>
            <div className="kitchen-todo__header">
                <div>{name}</div>
                <div>{table}</div>
            </div>
            <div className="kitchen-todo__items">
                {orders.map(e=>(
                    <div className={`kitchen-todo__item ${e.isDone ? "kitchen-todo__item--done": ""}`}>
                        <div className="kitchen-todo__item-name">
                            {e.name}
                        </div>
                        <div className="kitchen-todo__item-attr">
                            <div className="kitchen-todo__item-attr--num">
                                x{e.count}
                            </div>
                            <div className="kitchen-todo__items-attr--status">
                                {e.isDone?'v': 'x'}
                            </div>
                        </div>
                    </div>
                ))}
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
 
export default KitchenTodo;