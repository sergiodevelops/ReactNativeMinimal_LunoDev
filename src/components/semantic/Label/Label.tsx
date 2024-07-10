import React, {LabelHTMLAttributes, ReactElement} from "react";
import {Text, TextProps} from "react-native";
import {isWeb} from "../../../utils/platform";


type LabelProps = TextProps & LabelHTMLAttributes<HTMLLabelElement>;
export default function Label (props: LabelProps): ReactElement {
    // https://www.w3schools.com/tags/tag_label.asp


    return (isWeb() ?
            <label
                {...props as LabelHTMLAttributes<HTMLLabelElement>}
            /> :
            <Text
                {...props as TextProps}
                id={props.htmlFor}
                aria-label={"label"}
            />
    );
}
