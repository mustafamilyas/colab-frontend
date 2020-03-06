import {TOGGLE_MODAL, ADD_ORDER} from '../actions';

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
            return Object.assign({}, state, {
                orders: state.orders.concat(action.payload)
            });
        case TOGGLE_MODAL:
            return Object.assign({}, state, {
                isModalShow: action.payload.isModalShow,
                modalState: action.payload.modalState
            });
        default:
            return state;
    }
};
  
export default rootReducer;