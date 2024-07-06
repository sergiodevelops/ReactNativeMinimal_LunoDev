import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store";
import NativeApp from "./NativeApp";


export default function App(){
    return (
        <Provider
            store={store}
            children={<NativeApp/>}
        />
    );
}
