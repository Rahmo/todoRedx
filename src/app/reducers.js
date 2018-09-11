const CREATE_TODO = "CREATE_TODO";
import {combineReducers} from 'redux';
const users = (state = {},action )=>
{
    return state;
};
 const todos = (state= [1,2,3,3], action) => {
    switch (action.type){
        case CREATE_TODO:
            return [action.payload,...state];
        default:
            return state;
    }
};

export const reducer = combineReducers({todos,users});
