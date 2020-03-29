import React, {useContext} from 'react';
import { KitchenContext } from '../contexts/KitchenContext';

const KitchenQueue = (props) => {
    const {addTodo, deleteQueue} = useContext(KitchenContext);
    const {id, name, table} = props.queue;

    return (
    <div className='kitchen-queue'>
        <div className="kitchen-queue__number">#{id}</div>
        <div className="kitchen-queue__content">
            <div>
                {name}
            </div>
            <div>
                {table}
            </div>
        </div>

        <div className="kitchen-queue__action">
            <div className="kitchen-queue__action-btn kitchen-queue__action-btn--danger" onClick={()=>deleteQueue(id)}>
                Del
            </div>
            <div className="kitchen-queue__action-btn kitchen-queue__action-btn--primary" onClick={()=>addTodo(id)}>
                Process
            </div>
        </div>
    </div>
    );
}
 
export default KitchenQueue;