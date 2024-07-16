/*
// https://reactnative.dev/docs/animated
"fadeAnim" will be used as the value for "opacity". Initial Value: 0
use this inside the functional component
const fadeAnim = useRef(new Animated.Value(0)).current;
*/
import {Animated, StyleSheet} from "react-native";
import {FadeInProps} from "../../../../constants/types";


export const fadeInOpacity = (props: FadeInProps) => {
    const {fadeAnim, config} = props;
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
        toValue: config?.toValue || 1,
        duration: config?.duration || 1000,
        useNativeDriver: config?.useNativeDriver || false,
    }).start();
};

export const fadeOutOpacity = (props: FadeInProps) => {
    const {fadeAnim, config} = props;
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
        toValue: config?.toValue || 0,
        duration: config?.duration || 1000,
        useNativeDriver: config?.useNativeDriver || false,
    }).start();
};


export default function MainView__animation_fadeOpacity(fadeAnim?: Animated.Value) {
    return(
        StyleSheet.create({
            fadeOpacity: {
                opacity: fadeAnim || new Animated.Value(1),
            },
        })
    )
}
