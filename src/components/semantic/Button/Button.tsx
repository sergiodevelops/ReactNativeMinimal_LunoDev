import React, {HTMLAttributeAnchorTarget} from "react";
import {Linking, Pressable, PressableProps, TextProps, View, TouchableOpacity, Text} from "react-native";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import {isWeb} from "../../../utils/platform";
import Paragraph from "../Paragraph/Paragraph";
import MainView__button from "../../../styles/ts/MainView/__button/MainView__button";
import MainView__button_disabled from "../../../styles/ts/MainView/__button/_disabled/MainView__button_disabled";
import MainView__button_accept from "../../../styles/ts/MainView/__button/_accept/MainView__button_accept";
import MainView__button_decline from "../../../styles/ts/MainView/__button/_decline/MainView__button_decline";
import MainView__button_default from "../../../styles/ts/MainView/__button/_default/MainView__button_default";
import MainView__text from "../../../styles/ts/MainView/__text/MainView__text";


type ButtonProps = {
    asLink?: {
        href: string,
        target?: HTMLAttributeAnchorTarget
    } | undefined;
    type: 'accept' | 'decline' | 'default';
} & PressableProps;
export default function Button(props: ButtonProps) {
    const {
        mainView__button_container,
        mainView__button,
    } = MainView__button();
    const {mainView__text_color} = MainView__text();
    const {mainView__button_default} = MainView__button_default();
    const {mainView__button_disabled} = MainView__button_disabled();
    const {mainView__button_accept} = MainView__button_accept();
    const {mainView__button_decline} = MainView__button_decline();


    const handleOnPress = () => {
        if (!props?.asLink) return;

        // https://stackoverflow.com/questions/61198982/how-can-i-open-an-external-link-in-new-tab-in-react-native
        isWeb() ?
            window.open(props.asLink.href, props.asLink.target || '_blank') :
            Linking.openURL(props.asLink.href)
    }


    function getButtonStylesByType(): {
        color: string;
        borderColor?: string;
        backgroundColor?: string;
    } {
        if(props.disabled) return mainView__text_color;

        switch (props.type) {
            case 'accept':
                return mainView__button_accept;
            case 'decline':
                return mainView__button_decline;
            case 'default':
                return mainView__button_default;
            default:
                return mainView__text_color;
        }
    }


    return (
        <View role={"button"} style={mainView__button_container}>
            <Pressable
                {...props}
                onPress={
                    props?.asLink?.href ? handleOnPress : props.onPress
                }
                style={[
                    mainView__button,
                    getButtonStylesByType(),
                    props.disabled && mainView__button_disabled,
                    props.style as TextStyle,
                ]}
                children={
                    <Paragraph style={{
                        color: getButtonStylesByType().color,
                        textAlign: 'center',
                    }}>
                        {(props as TextProps).children}
                    </Paragraph>
                }
            />
        </View>
    );
}
