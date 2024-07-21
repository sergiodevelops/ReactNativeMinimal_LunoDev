import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import {View, ViewProps} from "react-native";
import {isWeb} from "../../../utils/platform";


type DivisionProps = HTMLAttributes<HTMLDivElement> & ViewProps;
export default function Division(props: DivisionProps) {
    return (
        isWeb() ?
            <div {...props as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>}/> :
            <View {...props as ViewProps}/>
    );
}
