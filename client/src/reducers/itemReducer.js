import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from '../actions/types';
import { stat } from 'fs';

const initialState = {
    items: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
       case GET_ITEMS:
           return {
               ...state
           };
        case DELETE_ITEMS:
            return{
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
            case ADD_ITEMS:
                    return{
                        ...state,
                        items: [action.payload, ...state.items]
                    };
            case ITEMS_LOADING:
                return {
                    ...stat,
                    loading: true
                }
        default:
            return state;

    }
}