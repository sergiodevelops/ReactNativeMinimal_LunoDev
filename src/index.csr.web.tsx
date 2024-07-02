import { AppRegistry, Platform } from 'react-native';
import {name as appKey2, webAppRootId} from './app/myApp.json';
import App from "../src/app/App";


AppRegistry.registerComponent(appKey2,() => App);


const rootTag = document.getElementById(webAppRootId);
if(Platform.OS === 'web') {
    AppRegistry.runApplication(appKey2, {
        initialProps: {},
        rootTag,
    });
}
