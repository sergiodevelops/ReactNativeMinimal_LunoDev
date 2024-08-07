import React, {ReactNode, useEffect} from "react";
import {Animated, SafeAreaView, ScrollView} from "react-native";
import {isWeb} from "../../../utils/platform";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import useScrollToTop from "../../../hooks/useScrollToTop";


export default function ScreenWrapper(props: {
    children: ReactNode,
    style?: StyleProp<ViewStyle> | undefined,
    animatedStyle?: StyleProp<ViewStyle> | undefined,
}) {
    useScrollToTop({automatic: true});


    return (
        <SafeAreaView {...{style: props.style}}>
            <Animated.View {...{style: props.animatedStyle}}>
                {/* https://reactnavigation.org/docs/use-scroll-to-top/ */}
                <ScrollView>
                    {props.children}
                    {/* https://www.w3schools.com/css/css3_transitions.asp */}
                    {isWeb() &&
                        <style>
                            {`
                * {
                    transition: color 100ms linear;
                    transition: background-color 100ms linear;
                 }
                `}
                        </style>}
                </ScrollView>
            </Animated.View>
        </SafeAreaView>
    );
}
