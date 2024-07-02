// index.ssr.web.ts
import { Platform } from 'react-native';
import {webAppRootId} from './app/myApp.json';
import {hydrateRoot} from 'react-dom/client';
import App from "../src/app/App";


if(Platform.OS === 'web') {
    const rootTag: HTMLElement = document.getElementById(webAppRootId)!;
    const root = hydrateRoot(rootTag, <App/>);
    root.render(<App />);
}
