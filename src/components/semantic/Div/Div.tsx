import {View, ViewProps} from "react-native";
import React from "react";


type DivProps = ViewProps;
export default function Div(props: DivProps){
    return (<View {...props} aria-label={'div'} />);
}
