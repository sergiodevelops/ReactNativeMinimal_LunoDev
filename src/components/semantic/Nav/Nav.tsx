import {View, ViewProps} from "react-native";
import Paragraph from "../Paragraph/Paragraph";
import React from "react";


export default function Nav(props: ViewProps){
    return(
        <View
            {...props}
            role={"navigation"}
        />
    );
}
