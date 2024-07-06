// index.tsx (native)
import {name as appKey} from '../../app/myApp.json';
import { AppRegistry } from 'react-native';
import App from "../../app/App";


// TODO fix problem “Could not get BatchedBridge, make sure your bundle is packaged correctly" in native app, web its ok (csr && ssr)
AppRegistry.registerComponent(appKey, () => App);
