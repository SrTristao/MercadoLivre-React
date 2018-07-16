import { ITEMS_FAILURE, ITEMS_SUCCESS, ITEMS_REQUEST, ITEMS_CLEAN, ITEM_SELECTED } from "../actionTypes";
import httpClient from '../../provider/http';
import history from '../../provider/history';

const itemsRequest = () => {
    return {
        type: ITEMS_REQUEST,
        isFetchingItems: true        
    }
}

const goNotFound = () => {
    if (window.location.hash !== '#/pageError')
        history.push('/pageError?notFound');
}

const gotServiceError = () => {
    if (window.location.hash !== '#/pageError')
        history.push('/pageError?ServiceError');
}

const itemsSuccess = response => {    
    const { data } = response;
    return {
        type: ITEMS_SUCCESS,
        isFetchingItems: false,
        itemsArr: data        
    }
}

const itemsError = message => {        
    return {
        type: ITEMS_FAILURE,
        isFetchingItems: false,
        message
    }
}

const itemSelected = response => {
    const { data } = response;
    return {
        type: ITEM_SELECTED,
        item_selected: data,
        isFetchingItems: false
    }
}

export function cleanItems() {
    return {
        type: ITEMS_CLEAN,
        itemsArr: [],
        item_selected: {}
    }
}

export function getItemDetails(id) {
    return async dispatch => {
        dispatch(itemsRequest());

        const onSuccess = response => {

            dispatch(itemSelected(response));
            return response;
        }

        const onError = error => {
            const { message } = error;
            dispatch(itemsError(message));
            return error;
        }

        try {
            const response = await httpClient.makeRequest(`http://127.0.0.1:3131/api/items/${id}`);
            return onSuccess(response);
        } catch(error) {
            return onError(error);
        }

    }
}


export function getItems(searchItems) {
    return async dispatch => {
        dispatch(itemsRequest());

        const onSuccess = (response) => {
            const { data } = response;
            if (data.length === 0) {
                dispatch(goNotFound());                
                return;
            }
            dispatch(itemsSuccess(response));                        
            return response;
        }

        const onError = (error) => {
            const { message } = error;
            dispatch(itemsError(message)); 
            if (message === "Network Error")  
                dispatch(gotServiceError());         
            return error;
        }

        try {
            const response = await httpClient.makeRequest(`http://127.0.0.1:3131/api/sites/${searchItems}`) 
            return onSuccess(response);
        } catch (error) {
            return onError(error)
        }
    }
}