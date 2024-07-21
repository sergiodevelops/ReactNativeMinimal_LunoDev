import React, {useEffect, useId} from "react";
import MainView from "../../../styles/ts/MainView/MainView";
import {NavigationProps} from "../../../app/App";
import ScreenWrapper from "../ScreenWrapper/ScreenWrapper";
import useRefCountRenders from "../../../hooks/useRefCountRenders";
import {Text} from "react-native";


// TODO
export default function AnimationScreen(props: NavigationProps) {

    const {navigation} = props;
    const id = `MySemantic-${useId()}`;
    const {count} = useRefCountRenders();

    const {
        mainView_container,
        mainView,
    } = MainView();

    const handleOnPressButtonGoToHomeScreen = () => navigation.navigate("home");



    useEffect(() => {
    }, []);


    return (
        <ScreenWrapper style={mainView_container}>
            <Text>AnimationScreen</Text>
        </ScreenWrapper>
    );
}
