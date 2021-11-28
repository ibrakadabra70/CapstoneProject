const reducers = (forms = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...forms, action.payload];
        case 'DELETE':
            return forms.filter((project) => project._id !== action.payload);
        default:
            return forms;
    }
};

export default reducers;