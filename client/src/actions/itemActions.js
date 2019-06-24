import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
dispatch(setItemLoading());
axios
 .get('/api/items')
 .then(res => 
    dispatch({
        type: GET_ITEMS,
        payload: res.data 
    }))
};

export const deleteItems = (id) => {
    return{
        type: DELETE_ITEMS,
        payload: id
    };
};

export const addItems = (item) => {
    return{
        type: ADD_ITEMS,
        payload: item
    };
};

export const setItemLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}