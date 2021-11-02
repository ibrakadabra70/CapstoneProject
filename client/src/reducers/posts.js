const reducers = (forms = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'UPLOAD_FORM':
            return [...forms, action.payload];
        default:
            return forms;
    }
};

export default reducers;