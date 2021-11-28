import * as api from '../api/index.js';

export const signin =(signFormData, history) => async (dispatch) => {
    try {
        const {data} = await api.signin(signFormData);

        dispatch({type: 'AUTH', data});

        history.push('/home');
    } catch (error) {
        console.log(error);
    }
}

export const signup =(signFormData, history) => async (dispatch) => {
    try {
        const {data} = await api.signup(signFormData);

        dispatch({type: 'AUTH', data});
        
        history.push('/home');
        
    } catch (error) {
        console.log(error);
    }
}