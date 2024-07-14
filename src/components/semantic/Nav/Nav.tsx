import React from "react";
import {View, ViewProps} from "react-native";


export default function Nav(props: ViewProps){

    return(
        <View
            {...props}
            role={"navigation"}
        />
    );
}
