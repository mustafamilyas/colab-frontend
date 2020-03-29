import React, { useContext } from 'react';
import KitchenQueue from '../components/KitchenQueue';
import KitchenTodo from '../components/KitchenTodo';
import { KitchenContext } from '../contexts/KitchenContext';

const Kitchen = () => {
    const {queue, todo} = useContext(KitchenContext);
    return (
        <div className="kitchen">
            <div className="kitchen__todo">
                <h2>Process Queue ({todo.length}/{todo.length+queue.length})</h2>
                <div className="kitchen__list kitchen__list--process">
                    {todo.map(e=><KitchenTodo todo={e}/>)}
                </div>
            </div>

            <div className="kitchen__queue">
                <h2>Order Queue</h2>
                <div className="kitchen__list kitchen__list--order">
                    {todo.map(e=><KitchenQueue queue={e}/>)}
                </div>
            </div>
        </div>
    );
}
 
export default Kitchen;