import React, { Component } from 'react';
import { formatMoney } from "../utils/format";

class KitchenQueue extends Component {
    render() { 
        return (
            <div className='kitchen-queue'>
                <div className="kitchen-queue__number">#21321</div>
                <div className="kitchen-queue__content">
                    <div>
                        Sayli
                    </div>
                    <div>
                        C105
                    </div>
                </div>
        
                <div className="kitchen-queue__action">
                    <div className="kitchen-queue__action-btn">
                        Delete
                    </div>
                    <div className="kitchen-queue__action-btn">
                        Finish
                    </div>
                </div>
            </div>

        );
    }
}
 
export default KitchenQueue;