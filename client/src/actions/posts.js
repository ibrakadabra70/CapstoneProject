import * as api from '../api/index.js';

export const getForms = () => async(dispatch) => {
    try {
        const {data} = await api.fetchForms();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }

}

export const sendForm = (form) => async(dispatch) => {
    try {
        const {data} = await api.sendForm(form);
        dispatch({type:'CREATE' , payload: data});

    } catch (error) {
        console.log(error.message);
    }
}