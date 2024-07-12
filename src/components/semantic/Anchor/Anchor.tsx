import {AnchorHTMLAttributes, CSSProperties, HTMLAttributes, useState} from "react";
import {Text, Linking, TextProps} from "react-native";
import MainView__anchor from "../../../styles/ts/MainView/__anchor/MainView__anchor";
import {isWeb} from "../../../utils/platform";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import MainView__paragraph from "../../../styles/ts/MainView/__paragraph/MainView__paragraph";


type AnchorProps = { href: string } & TextProps & AnchorHTMLAttributes<HTMLAnchorElement>;
export default function Anchor(props: AnchorProps) {
    // https://www.w3schools.com/tags/tag_a.asp
    // https://reactnative.dev/docs/linking?language=typescript
    /* TODO review about this
    mailto: support@expo.io
    tel: +123456789
    sms:+123456789
    https://google.com/
     */
    const {mainView__anchor, mainView__anchor_hover} = MainView__anchor();
    const {mainView__paragraph} = MainView__paragraph();
    const [isHover, setIsHover] = useState(false);


    const handleOnPress = () => {
        if (!props.href) return;
        Linking.openURL(props.href)
    }

    const handleOnMouseEnter = () => {
        setIsHover(true);
    }

    const handleOnMouseOut = () => {
        setIsHover(false);
    }


    return (
        isWeb() ?
            <a
                onMouseEnter={handleOnMouseEnter}
                onMouseOut={handleOnMouseOut}
                {...props as HTMLAttributes<HTMLAnchorElement>}
                target={props.target || "_blank"}
                style={{
                    ...mainView__paragraph,
                    ...mainView__anchor,
                    ...(isHover && mainView__anchor_hover),
                    // inlineSize: 'fit-content',
                    wordWrap: 'break-word',
                    ...props.style as CSSProperties,
                }}
                role={'link'}
            /> :
            <Text
                {...props as TextProps}
                onPress={handleOnPress}
                style={[
                    mainView__anchor,
                    mainView__paragraph,
                    {flexWrap: 'wrap', flexShrink: 1},
                    props.style as TextStyle,
                ]}
                role={'link'}
            />
    );
}
