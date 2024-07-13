/*
// https://reactnative.dev/docs/animated
"fadeAnim" will be used as the value for "opacity". Initial Value: 0
use this inside the functional component
const fadeAnim = useRef(new Animated.Value(0)).current;
*/
import {Animated, StyleSheet} from "react-native";
import AnimatedValue = Animated.AnimatedValue;
import AnimatedValueXY = Animated.AnimatedValueXY;
import AnimatedInterpolation = Animated.AnimatedInterpolation;


type AnimationConfigProps = {
    toValue?:
        | number
        | AnimatedValue
        | {x: number; y: number}
        | AnimatedValueXY
        | AnimatedInterpolation<number>;
    duration?: number;
    useNativeDriver?: boolean;
};
export type FadeInProps = {fadeAnim: Animated.Value, config?: AnimationConfigProps};


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
                opacity: fadeAnim || 1,
            },
        })
    )
}
