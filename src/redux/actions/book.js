import axios from "axios";
import types from "../types";

// export const getBooks = (book) => (dispatch) => {
//     dispatch({ type: types.GET_BOOKS, payload: book });
// };

export const getBooks = () => {
    console.log("getBooks");

    return (dispatch) => {
        console.log("Get books dispatch");

        axios.get("https://the-one-api.herokuapp.com/v1/book").then((res) => {
            //console.log(res.data.docs);
            dispatch({
                type: types.GET_BOOKS,
                payload: res.data.docs
            });
        });
    };
};
