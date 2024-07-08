import React, {ReactNode} from "react";
import MainView__button from "../../../styles/ts/MainView/__button/MainView__button";
import {Pressable, PressableProps, Text} from "react-native";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import MainView__button_disabled from "../../../styles/ts/MainView/__button/_disabled/MainView__button_disabled";
import MainView__button_accept from "../../../styles/ts/MainView/__button/_accept/MainView__button_accept";
import MainView__button_decline from "../../../styles/ts/MainView/__button/_decline/MainView__button_decline";


interface MainViewButtonParams {
    children?: ReactNode;
    style?: StyleProp<ViewStyle> | undefined;
    type?: 'accept' | 'decline' | undefined;
}


export function Button(props: MainViewButtonParams & PressableProps) {
    const {mainView__button} = MainView__button();
    const {mainView__button_disabled} = MainView__button_disabled();
    const {mainView__button_accept} = MainView__button_accept();
    const {mainView__button_decline} = MainView__button_decline();


    return (
            <Pressable
                role={"button"}
                {...props}
                style={[
                    [
                        mainView__button,
                        props.disabled && mainView__button_disabled,
                        props.type === 'decline' && mainView__button_decline,
                        props.type === 'accept' && mainView__button_accept,
                    ],
                    props.style,
                ]}
                children={<Text>{props.children}</Text>}
            />
    );
}
