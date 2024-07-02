import {AppRegistry, Platform} from 'react-native';
import App from './app/App';
import {name as appKey} from './app/appData.json';


if (Platform.OS !== 'web') {
    // TODO seach about this problem error when AppRegistry when use web and mobile in React Native
    // AppRegistry.unmountApplicationComponentAtRootTag(AppRegistry.getAppKeys()?.indexOf(appKey))
    AppRegistry.registerComponent(appKey, () => App);
}
