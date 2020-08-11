import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../redux/actions/book";

function Hello() {
    const book = useSelector((state) => state.book);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>book</h1>
            {console.log(book)}
            <button onClick={() => dispatch(getBooks())}> get books 📚 </button>
        </div>
    );
}

export default Hello;
