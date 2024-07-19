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
export type IOptionExample = { stringValue: `stringValueOption${number}`, name: string, id: number }
export type RandomColorProp = `#${string}` | undefined;
// https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>
export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>
export type ResponsiveProps = {
    xs?: { part: IntRange<1, 13> } | undefined; // < 576 px
    sm?: { part: IntRange<1, 13> } | undefined; // >= 576 px
    md?: { part: IntRange<1, 13> } | undefined; // >= 768 px
    lg?: { part: IntRange<1, 13> } | undefined; // >= 992 px
    xl?: { part: IntRange<1, 13> } | undefined; // >= 1200 px
    xxl?: { part: IntRange<1, 13> } | undefined; // >= 1400 px
}
