import App from "./web/src/App";
import { AppRegistry } from 'react-native';
import name from 'app.json';


AppRegistry.registerComponent(name, () => App);
AppRegistry.runApplication(name, {
    initialProps: {},
    rootTag: document.getElementById('app-root')
});
