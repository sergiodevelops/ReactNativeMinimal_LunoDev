// index.tsx (native or web csr)
import {name as appKey, webAppRootId} from './app/myApp.json';
import { AppRegistry, Platform } from 'react-native';
import NativeApp from "./app/NativeApp";


// TODO fix problem in native android app, web its ok (csr && ssr)
if(Platform.OS !== 'web') {
    console.log('Platform "native" MODE is loaded');
    AppRegistry.registerComponent(appKey,() => NativeApp);
}
