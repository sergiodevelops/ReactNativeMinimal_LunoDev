import React, {HTMLAttributes} from "react";
import {View, ViewProps} from "react-native";
import {isWeb} from "../../../utils/platform";


type DivisionProps = ViewProps & HTMLAttributes<HTMLDivElement>;
export default function Division(props: DivisionProps) {
    return (
        isWeb() ?
            <div {...props as HTMLAttributes<HTMLDivElement>}/> :
            <View {...props as ViewProps}/>
    );
}
