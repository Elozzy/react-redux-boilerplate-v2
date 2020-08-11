import { combineReducers } from "redux";
import getBook from "./books";

const allReducers = combineReducers({
    book: getBook
});

export default allReducers;
