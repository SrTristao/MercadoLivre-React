import { ITEMS_FAILURE, ITEMS_SUCCESS, ITEMS_REQUEST } from "../actionTypes";

const itemsRequest = () => {
    return {
        type: ITEMS_REQUEST,
        isFetchingItems: true
    }
}

const itemsSuccess = (response) => {
    return {
        type: ITEMS_SUCCESS,
        isFetchingItems: false,
        items: response.data
    }
}

const itemsError = (error) => {
    const { message } = error.response.data;
    return {
        type: ITEMS_FAILURE,
        isFetchingItems: false,
        message
    }
}


export function getItems() {
    return async dispatch => {
        dispatch(itemsRequest());

        const onSuccess = (response) => {
            dispatch(itemsSuccess(response));
            return response;
        }

        const onError = (error) => {
            dispatch(itemsError(error));
            return error;
        }

        try {
            return onSuccess('');
        } catch (error) {
            return onError(error)
        }
    }
}