import {ADD_ARTICLE} from '../actions';

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
    ]
};
  
function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
        default:
            return state;
    }
};
  
export default rootReducer;