// index.ssr.web.ts
import { AppRegistry, Platform } from 'react-native';
import {name as appKey2, webAppRootId} from '../src/app/appData.json';
import {hydrateRoot} from 'react-dom/client';
import App from "../src/app/App";


if(Platform.OS === 'web') {
    AppRegistry.registerComponent(appKey2,() => App);

    const rootTag = document.getElementById(webAppRootId)!;
    const root = hydrateRoot(rootTag, <App/>);
    root.render(<App />);
}
