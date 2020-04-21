import {TOGGLE_MODAL, ADD_ORDER, CHANGE_NAME, CHANGE_TBL_NUM, EMPTY_ORDER, CHANGE_SUCCESS_ORDER} from '../actions';
// import service from '../utils/request';
import { createOrder } from '../api/order';

export const toggleModal = (payload) => {
    return { type: TOGGLE_MODAL, payload }
};

export const addOrder = (payload) => {
    return { type: ADD_ORDER, payload }
};

export const changeName = (payload) => {
    return { type: CHANGE_NAME, payload }
};

export const changeTableNumber = (payload) => {
    return { type: CHANGE_TBL_NUM, payload }
};

export const changeSuccessOrder = (payload) => {
    return { type: CHANGE_SUCCESS_ORDER, payload }
};

export const submitOrder = async function(payload) {
    const resp = await createOrder(payload);
    console.log(resp);
    return resp;
}

export const emptyOrder = () => {
    return { type: EMPTY_ORDER }
};