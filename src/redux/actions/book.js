import axios from "axios";
import types from "../types";

export const getBooks = () => {
    console.log("getBooks");
    return (dispatch) => {
        console.log("Get books dispatch");
        axios.get("https://the-one-api.herokuapp.com/v1/book").then((res) => {
            dispatch({
                type: types.GET_BOOKS,
                payload: res.data.docs
            });
        });
    };
};
