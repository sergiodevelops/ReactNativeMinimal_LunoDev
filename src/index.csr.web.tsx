// index.csr.web.ts
import { AppRegistry, Platform } from 'react-native';
import App from "../src/app/App";
import {name as appKey, webAppRootId} from './app/myApp.json';


AppRegistry.registerComponent(appKey,() => App);
const rootTag = document.getElementById(webAppRootId);
if(Platform.OS === 'web') {
    AppRegistry.runApplication(appKey, {
        initialProps: {},
        rootTag,
    });
}
