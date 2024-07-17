import React, {ReactNode} from "react";
import {Animated, SafeAreaView, ScrollView} from "react-native";
import {isWeb} from "../../../utils/platform";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";


export default function ScreenWrapper(props: {
    children: ReactNode,
    style?: StyleProp<ViewStyle> | undefined,
    animatedStyle?: StyleProp<ViewStyle> | undefined,
}) {
    return (
        <SafeAreaView {...{style: props.style}}>
            <Animated.View {...{style: props.animatedStyle}}>
                <ScrollView>
                    {props.children}

                    {/* https://www.w3schools.com/css/css3_transitions.asp */}
                    {isWeb() &&
                        <style>
                            {`
                * {
                    transition: color 200ms linear;
                    transition: background-color 100ms linear;
                 }
                `}
                        </style>}
                </ScrollView>
            </Animated.View>
        </SafeAreaView>
    );
}
