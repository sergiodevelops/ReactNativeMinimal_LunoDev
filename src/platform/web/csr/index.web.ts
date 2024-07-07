// index.web.ts (web - CSR)
import {name as appKey, webAppRootId} from '../../../app/app.json';
import {AppRegistry} from 'react-native';
import Index from "../../../app";
import {isWeb} from "../../../utils/platform";


if(isWeb()) {
    console.log('Platform web "CSR" MODE is loaded');
    AppRegistry.registerComponent(appKey, () => Index);
    const rootTag = document.getElementById(webAppRootId);
    AppRegistry.runApplication(appKey, {
        initialProps: {},
        rootTag,
    });
}
