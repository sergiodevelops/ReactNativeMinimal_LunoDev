import React, {LabelHTMLAttributes, ReactElement} from "react";
import {Text, TextProps} from "react-native";
import {isWeb} from "../../../utils/platform";
import MainView__paragraph from "../../../styles/ts/MainView/__paragraph/MainView__paragraph";


type LabelProps = TextProps & LabelHTMLAttributes<HTMLLabelElement>;
export default function Label (props: LabelProps): ReactElement {
    // https://www.w3schools.com/tags/tag_label.asp
    const {
        mainView__paragraph,
        mainView__paragraph_default,
    } = MainView__paragraph();


    return (isWeb() ?
            <label {...props as LabelHTMLAttributes<HTMLLabelElement>}/> :
            <Text
                {...props as TextProps}
                style={[
                    mainView__paragraph,
                    mainView__paragraph_default,
                    props.style,
                ]}
                id={props.htmlFor}
                aria-label={props.htmlFor}
                aria-labelledby={props.htmlFor}
            />
    );
}
