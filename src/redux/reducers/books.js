const { default: types } = require("../types");
const initialState = {
    book: {}
};
const getBook = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_BOOKS:
            return {
                ...state,
                book: action.payload
            };
        default:
            return state;
    }
};

export default getBook;
