import React, {ReactNode} from "react";
import {Animated, SafeAreaView, ScrollView} from "react-native";
import {isWeb} from "../../../utils/platform";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";


export default function ScreenWraper(props: {
    children: ReactNode,
    style?: StyleProp<ViewStyle> | undefined,
}) {
    return (
        <SafeAreaView>
            <Animated.View {...{style: props.style}}>
                <ScrollView>
                    {props.children}

                    {/* https://www.w3schools.com/css/css3_transitions.asp */}
                    {isWeb() &&
                        <style>
                            {`
                * {
                    transition: color 500ms linear;
                    transition: background-color 200ms linear;
                 }
                `}
                        </style>}
                </ScrollView>
            </Animated.View>
        </SafeAreaView>
    );
}
