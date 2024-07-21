import React, {StrictMode} from 'react';
import {Provider} from "react-redux";
import {store} from "./store";
import App from "./App";
import {View, Text} from "react-native";


export default function Index() {
    return (
        <Provider {...{store}}>
            <StrictMode>
                <App/>
            </StrictMode>
        </Provider>
    );
}
