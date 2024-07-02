// index.ssr.web.ts
import {AppRegistry, Platform} from 'react-native';
import {hydrateRoot} from 'react-dom/client';
import App from "../src/app/App";
import {name as appKey, webAppRootId} from './app/myApp.json';


AppRegistry.registerComponent(appKey,() => App);
if(Platform.OS === 'web') {
    const rootTag: HTMLElement = document.getElementById(webAppRootId)!;
    const root = hydrateRoot(rootTag, <App/>);
    root.render(<App />);
}
