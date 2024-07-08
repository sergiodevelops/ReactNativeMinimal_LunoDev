import React, {HTMLAttributes, ReactElement} from "react";
import {Text, TextProps} from "react-native";
import {isWeb} from "../../../utils/platform";
import MainView__text from "../../../styles/ts/MainView/__text/MainView__text";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";


const Paragraph = (props: HTMLAttributes<HTMLParagraphElement> & StyleProp<TextStyle>): ReactElement => {
    const {mainView__text} = MainView__text();

    const paragraphStyles = {
        ...props.style,
        ...mainView__text,
    }

    return (isWeb() ?
            <p
                style={paragraphStyles as HTMLAttributes<HTMLParagraphElement>}
                {...props as HTMLAttributes<HTMLParagraphElement>}
            /> :
            <Text
                style={paragraphStyles as TextStyle}
                {...props as TextProps}
            />
    );
}


export default Paragraph;
