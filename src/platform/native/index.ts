// index.tsx (native)
import {name as appKey} from '../../app/myApp.json';
import { AppRegistry } from 'react-native';
import App from "../../app/App";


AppRegistry.registerComponent(appKey, () => App);
