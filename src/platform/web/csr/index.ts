// index.csr.web.ts (native or web csr)
import {name as appKey, webAppRootId} from '../../../app/app.json';
import {AppRegistry, Platform} from 'react-native';
import Index from "../../../app";


if(Platform.OS === 'web') {
    console.log('Platform web "CSR" MODE is loaded');
    AppRegistry.registerComponent(appKey, () => Index);
    const rootTag = document.getElementById(webAppRootId);
    AppRegistry.runApplication(appKey, {
        initialProps: {},
        rootTag,
    });
}
