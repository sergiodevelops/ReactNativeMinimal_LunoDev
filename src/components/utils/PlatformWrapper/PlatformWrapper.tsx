// Example: React Native Component Wrapper
// https://medium.com/@mohamedakmal03/rendering-react-native-code-on-a-web-view-with-next-js-13-ssr-and-react-native-web-1506649f869b
import React, {ReactNode} from 'react';
import { View } from 'react-native';
import {isWeb} from "../../../utils/platform";


const ReactNativeComponentWrapper = (props: {
    children: ReactNode,
}) => {
    const {children} = props;
    return(
        isWeb() ?
            <div {...{children}} /> :
            <View {...props} />
    );
}


export default ReactNativeComponentWrapper;
