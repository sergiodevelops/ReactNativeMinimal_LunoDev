import React, {CSSProperties, LabelHTMLAttributes, ReactElement} from "react";
import {Text, TextProps} from "react-native";
import {isWeb} from "../../../utils/platform";
import MainView__paragraph from "../../../styles/ts/MainView/__paragraph/MainView__paragraph";
import MainView__label from "../../../styles/ts/MainView/__label/mainView__label";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";


type LabelProps = TextProps & LabelHTMLAttributes<HTMLLabelElement>;
export default function Label (props: LabelProps): ReactElement {
    // https://www.w3schools.com/tags/tag_label.asp
    const { mainView__paragraph, mainView__paragraph_default} = MainView__paragraph();
    const { mainView__label } = MainView__label();


    return (isWeb() ?
            <label
                {...props as LabelHTMLAttributes<HTMLLabelElement>}
                style={{
                    ...mainView__paragraph,
                    ...mainView__paragraph_default,
                    ...mainView__label,
                    display: 'block',
                    ...props.style as CSSProperties,
                }}
            /> :
            <Text
                {...props as TextProps}
                style={[
                    mainView__paragraph,
                    mainView__paragraph_default,
                    mainView__label,
                    props.style as TextStyle,
                ]}
                id={props.htmlFor}
                aria-label={props.htmlFor}
                aria-labelledby={props.htmlFor}
            />
    );
}
