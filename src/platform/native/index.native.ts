// index.native.ts (NATIVE ios & android)
import {name as appKey} from '../../app/app.json';
import { AppRegistry } from 'react-native';
import Index from "../../app";


AppRegistry.registerComponent(appKey, () => Index);
