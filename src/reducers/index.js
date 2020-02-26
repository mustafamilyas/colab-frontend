import {ADD_ARTICLE, TOGGLE_MODAL} from '../actions';

const initialState = {
    articles: [
        {
            title: "test"
        },
        {
            title: "test1"
        },
        {
            title: "test2"
        }
    ],
    modalState: 0,
    isModalShow: true
};
  
function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
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