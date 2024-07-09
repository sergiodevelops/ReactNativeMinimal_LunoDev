import React, {CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactElement} from "react";
import {Text, TextProps} from "react-native";
import {isWeb} from "../../../utils/platform";
import MainView__paragraph from "../../../styles/ts/MainView/__paragraph/MainView__paragraph";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {TextStyle, ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";


const Paragraph = (
    props: TextProps & HTMLAttributes<HTMLParagraphElement>
): ReactElement => {
    const {
        mainView__paragraph,
        mainView__paragraph_default
    } = MainView__paragraph();


    return (isWeb() ?
            <p
                {...props as HTMLAttributes<HTMLParagraphElement>}
                style={{
                    ...props.style as CSSProperties,
                    ...mainView__paragraph,
                    ...mainView__paragraph_default,
                } as CSSProperties | undefined}
            /> :
            <Text
                {...props as TextProps}
                style={{
                    ...props.style as CSSProperties,
                    ...mainView__paragraph,
                    ...mainView__paragraph_default,
                } as StyleProp<TextStyle | ViewStyle>}
            />
    );
}


export default Paragraph;
