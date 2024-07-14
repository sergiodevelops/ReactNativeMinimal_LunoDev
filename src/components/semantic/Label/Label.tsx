import React, {CSSProperties, LabelHTMLAttributes, ReactElement} from "react";
import {Text, TextProps} from "react-native";
import {isWeb} from "../../../utils/platform";
import MainView__paragraph from "../../../styles/ts/MainView/__paragraph/MainView__paragraph";
import MainView__label from "../../../styles/ts/MainView/__label/mainView__label";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import MainView__text from "../../../styles/ts/MainView/__text/MainView__text";


type LabelProps = TextProps & LabelHTMLAttributes<HTMLLabelElement>;
export default function Label (props: LabelProps): ReactElement {
    // https://www.w3schools.com/tags/tag_label.asp
    const { mainView__text_color } = MainView__text();
    const { mainView__paragraph } = MainView__paragraph();
    const { mainView__label } = MainView__label();


    return (isWeb() ?
            <label
                {...props as LabelHTMLAttributes<HTMLLabelElement>}
                style={{
                    ...mainView__text_color,
                    ...mainView__paragraph,
                    ...mainView__label,
                    display: 'block',
                    ...props.style as CSSProperties,
                }}
            /> :
            <Text
                {...props as TextProps}
                style={[
                    mainView__text_color,
                    mainView__paragraph,
                    mainView__label,
                    props.style as TextStyle,
                ]}
                id={props.htmlFor}
                aria-label={props.htmlFor}
                aria-labelledby={props.htmlFor}
            />
    );
}
