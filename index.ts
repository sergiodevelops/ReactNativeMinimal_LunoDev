import { AppRegistry } from 'react-native';
import App from './src/App';
import {
    name as appKey,
} from './appData.json';

// TODO seach about this problem error when AppRegistry when use web and mobile in React Native
// AppRegistry.unmountApplicationComponentAtRootTag(AppRegistry.getAppKeys()?.indexOf(appKey))
AppRegistry.registerComponent(appKey,() => App);
