// index.csr.web.ts (native or web csr)
import {name as appKey, webAppRootId} from '../../../app/myApp.json';
import {AppRegistry, Platform} from 'react-native';
import App from "../../../app/App";


if(Platform.OS === 'web') {
    console.log('Platform web "CSR" MODE is loaded');
    AppRegistry.registerComponent(appKey, () => App);
    const rootTag = document.getElementById(webAppRootId);
    AppRegistry.runApplication(appKey, {
        initialProps: {},
        rootTag,
    });
}
