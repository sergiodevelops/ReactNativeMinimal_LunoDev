import React, {HTMLProps} from "react";
import {View, ViewProps} from "react-native";
import {isWeb} from "../../../utils/platform";



type DivProps = ViewProps & HTMLProps<HTMLDivElement>;
export default function Division(props: DivProps) {
    return (
        <View>
            {isWeb() ?
                <div {...props as HTMLProps<HTMLDivElement>}/> :
                <View {...props as ViewProps}/>}
        </View>
    );
}
