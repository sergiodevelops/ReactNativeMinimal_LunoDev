import { AppRegistry, Platform } from 'react-native';
import App from "../src/App";
import {
    name as appKey2,
    webAppRootId
} from '../appData.json';

// TODO change appKey2 for appKey when resolve problem about AppRegistry
AppRegistry.registerComponent(appKey2,() => App);

const rootTag = document.getElementById(webAppRootId);
if(Platform.OS === 'web') {
    AppRegistry.runApplication(appKey2, {
        initialProps: {},
        rootTag,
    });
}