import {AnchorHTMLAttributes, CSSProperties, HTMLAttributes} from "react";
import {Text, ViewProps, Linking, TextProps} from "react-native";
import MainView__anchor from "../../../styles/ts/MainView/__anchor/MainView__anchor";
import {isWeb} from "../../../utils/platform";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";


type AnchorProps = {href: string} & TextProps & AnchorHTMLAttributes<HTMLAnchorElement>;
export default function Anchor(props: AnchorProps) {
    // https://www.w3schools.com/tags/tag_a.asp
    // https://reactnative.dev/docs/linking?language=typescript
    /*
    mailto: support@expo.io
    tel: +123456789
    sms:+123456789
    https://google.com/
     */
    const {mainView__anchor} = MainView__anchor();


    function handleOnPress() {
        if(!props.href) return;
        Linking.openURL(props.href)
    }


    return (
        isWeb() ?
            <a
                {...props as HTMLAttributes<HTMLAnchorElement>}
                target={props.target || "_blank"}
                style={{
                    ...mainView__anchor,
                    ...props.style as CSSProperties,
                }}
                role={'link'}
            /> :
            <Text
                {...props as TextProps}
                onPress={handleOnPress}
                style={[
                    mainView__anchor,
                    props.style as TextStyle,
                ]}
                role={'link'}
            />
    );
}
