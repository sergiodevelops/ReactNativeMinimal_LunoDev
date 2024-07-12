import {View, ViewProps} from "react-native";
import React, {HTMLAttributes} from "react";


type DivProps = ViewProps & HTMLAttributes<HTMLElement>;
export default function Div(props: DivProps){
    return (
        <View
            style={{inlineSize: 'inherit'}}
            {...props}
            aria-label={'div'}
        />
    );
}
