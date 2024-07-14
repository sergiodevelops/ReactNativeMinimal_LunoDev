import React, {useId} from "react";
import MainView from "../../../styles/ts/MainView/MainView";
import useStyleThemeStore from "../../../hooks/useStyleThemeStore";
import {View} from "react-native";
import Paragraph from "../../semantic/Paragraph/Paragraph";
import Button from "../../semantic/Button/Button";
import {NavigationProps} from "../../../app/App";


export function DetailsScreen(props: NavigationProps) {
    const {navigation} = props;
    const id = `MySemantic-${useId()}`;

    const {mainView_container, mainView} = MainView();
    const {toogleStyleTheme, currentIconStyleTheme} = useStyleThemeStore();

    const handleOnPressButtonGoToHomeScreen = () => {
        navigation.navigate("home");
    }


    return (
        <View style={[
            mainView_container,
            mainView,
            {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }
        ]}>
            <Paragraph>🤩 Details Screen 🤝</Paragraph>
            {/* BUTTON default */}
            <Button
                id={`${id}-button-default`}
                type={'default'}
                onPress={toogleStyleTheme}
                children={`Toogle Theme "default" Button ${currentIconStyleTheme}`}
            />
            {/* BUTTON accept */}
            <Button
                id={`${id}-button-goToDetailsScreen`}
                type={"default"}
                onPress={handleOnPressButtonGoToHomeScreen}
                children={`👈 Go back to "Home" screen`}
            />
        </View>
    );
}
