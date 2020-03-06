import {TOGGLE_MODAL, ADD_ORDER, CHANGE_NAME, CHANGE_TBL_NUM, EMPTY_ORDER} from '../actions';

const initialState = {
    name: '',
    table: '',
    orders: [],
    modalState: 0,
    isModalShow: true
};
  
function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_ORDER:
            let idx = state.orders.findIndex(item => item.id === action.payload.id);

            if(idx === -1) {
                return Object.assign({}, state, {
                    orders: state.orders.concat(action.payload)
                });
            } else {
                return Object.assign({}, state, {
                    orders: state.orders.map(
                        (order, i) => (i === idx ? 
                            {...order, count: order.count+action.payload.count} : order))
                });
            }
        case TOGGLE_MODAL:
            return Object.assign({}, state, {
                isModalShow: action.payload.isModalShow,
                modalState: action.payload.modalState
            });
        case EMPTY_ORDER:
            return Object.assign({}, state, {
                name: '',
                table: '',
                orders: []
            });
        case CHANGE_NAME:
            return Object.assign({}, state, {
                name: action.payload
            });
        case CHANGE_TBL_NUM:
            return Object.assign({}, state, {
                table: action.payload
            });
        default:
            return state;
    }
};
  
export default rootReducer;