import { AppRegistry, Platform } from 'react-native';
import {Provider} from "react-redux";
import {name as appKey2, webAppRootId} from '../src/app/appData.json';
import {store} from "./app/store";
import App from "../src/app/App";


const AppWithStore=()=>(
    <Provider store={store} children={<App/>}/>
);


AppRegistry.registerComponent(appKey2,() => AppWithStore);


const rootTag = document.getElementById(webAppRootId);
if(Platform.OS === 'web') {
    AppRegistry.runApplication(appKey2, {
        initialProps: {},
        rootTag,
    });
}
