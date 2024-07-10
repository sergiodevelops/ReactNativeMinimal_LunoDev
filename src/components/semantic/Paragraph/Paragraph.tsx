import React, {CSSProperties, HTMLAttributes, ReactElement} from "react";
import {Text, TextProps} from "react-native";
import {isWeb} from "../../../utils/platform";
import MainView__paragraph from "../../../styles/ts/MainView/__paragraph/MainView__paragraph";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {TextStyle, ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";


export default function Paragraph (
    props: TextProps & HTMLAttributes<HTMLParagraphElement>
): ReactElement {

    const {
        mainView__paragraph,
        mainView__paragraph_default
    } = MainView__paragraph();


    return (isWeb() ?
            <p
                {...props as HTMLAttributes<HTMLParagraphElement>}
                style={{
                    ...mainView__paragraph,
                    ...mainView__paragraph_default,
                    ...props.style as CSSProperties,
                } as CSSProperties | undefined}
            /> :
            <Text
                {...props as TextProps}
                style={{
                    ...mainView__paragraph,
                    ...mainView__paragraph_default,
                    ...props.style as CSSProperties,
                } as StyleProp<TextStyle | ViewStyle>}
            />
    );
}
