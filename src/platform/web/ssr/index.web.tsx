// index.web.tsx (web - SSR)
import {name as appKey, webAppRootId} from '../../../app/app.json';
import {AppRegistry, Platform} from 'react-native';
import {hydrateRoot} from 'react-dom/client';
import Index from "../../../app";


if(Platform.OS === 'web') {
    console.log('Platform web "SSR" MODE is loaded');
    AppRegistry.registerComponent(appKey, () => Index);
    const rootTag: HTMLElement = document.getElementById(webAppRootId)!;
    const root = hydrateRoot(rootTag, <Index/>);
    root.render(<Index/>);
}
