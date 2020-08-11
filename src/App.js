import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import Hello from "./components/hello";

function App() {
    return (
        <Provider store={store}>
            <Hello />
        </Provider>
    );
}

export default App;
