import {ADD_ARTICLE, TOGGLE_MODAL} from '../actions';

export function addArticle(payload) {
    console.log('add article')
    return { type: ADD_ARTICLE, payload }
};

export const toggleModal = (payload) => {
    console.log('toggle modal')
    return { type: TOGGLE_MODAL, payload }
};