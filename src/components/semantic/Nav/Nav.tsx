import React from "react";
import {View, ViewProps} from "react-native";
import MainView__navigation from "../../../styles/ts/MainView/__navigation/MainView__navigation";


export default function Nav(props: ViewProps){
    const {
        mainView__navigation_container,
        mainView__navigation,
    } = MainView__navigation();


    return(
        <View
            style={[
                mainView__navigation_container,
                mainView__navigation,
            ]}
            {...props}
            role={"navigation"}
        />
    );
}
