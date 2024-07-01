import { AppRegistry } from 'react-native';
import {Provider} from "react-redux";
import { store } from './app/store';
import App from './app/App';
import {name as appKey} from './app/appData.json';


const AppWithStore=()=>(
    <Provider store={store} children={<App/>}/>
);


// TODO seach about this problem error when AppRegistry when use web and mobile in React Native
// AppRegistry.unmountApplicationComponentAtRootTag(AppRegistry.getAppKeys()?.indexOf(appKey))
AppRegistry.registerComponent(appKey,() => AppWithStore);
