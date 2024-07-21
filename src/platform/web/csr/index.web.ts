// import default ts for WEB (CSR) entrypoint

import {name as appKey, webAppRootId} from '../../../app/app.json';
import {AppRegistry} from 'react-native';
import Index from "../../../app";


console.log('Platform web "CSR" MODE is loaded');
AppRegistry.registerComponent(appKey, () => Index);
const rootTag = document.getElementById(webAppRootId);
AppRegistry.runApplication(appKey, {
    initialProps: {},
    rootTag,
});
