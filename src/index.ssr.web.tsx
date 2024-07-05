// index.ssr.web.ts (native or web csr)
import {name as appKey, webAppRootId} from './app/myApp.json';
import {AppRegistry, Platform} from 'react-native';
import {hydrateRoot} from 'react-dom/client';
import WebApp from "./app/WebApp";


if(Platform.OS === 'web') {
    console.log('Platform web "SSR" MODE is loaded');
    AppRegistry.registerComponent(appKey, () => WebApp);
    const rootTag: HTMLElement = document.getElementById(webAppRootId)!;
    const root = hydrateRoot(rootTag, <WebApp/>);
    root.render(<WebApp/>);
}
