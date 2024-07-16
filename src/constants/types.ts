import {Animated} from "react-native";
import AnimatedValue = Animated.AnimatedValue;
import AnimatedValueXY = Animated.AnimatedValueXY;
import AnimatedInterpolation = Animated.AnimatedInterpolation;


export type FadeInProps = {fadeAnim: Animated.Value, config?: AnimationConfigProps};
export type AnimationConfigProps = {
    toValue?:
        | number
        | AnimatedValue
        | {x: number; y: number}
        | AnimatedValueXY
        | AnimatedInterpolation<number>;
    duration?: number;
    useNativeDriver?: boolean;
};
export type KeyProp = string | 'default';
export type OptionProp = Object | string | undefined;
export type ILang = { lang: 'en-EN' | 'es-AR' | 'it-IT', name: string, id: number }
export type RandomColorProp = `#${string}` | undefined;
