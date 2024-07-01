import React, {ReactNode} from "react";
import MainView__button from "../../styles/mainView/__button/MainView__button";
import {Button, Pressable} from "react-native";
import {getStylesFromTheme} from "../../utils/styles";
import useStyleThemeStore from "../../hooks/useStyleThemeStore";


interface MainViewButtonParams {
    content: ReactNode;
    onClick: () => void;
}


export function MainViewButton(props: MainViewButtonParams) {

    const {
        currentStyleTheme,
        toogleStyleTheme,
        currentIconStyleTheme
    } = useStyleThemeStore()
    const {
        mainView__button,
        mainView__button_lightTheme,
        mainView__button_darkTheme,
    } = MainView__button;


    return (
            <Pressable
                style={[
                    mainView__button,
                    getStylesFromTheme(
                        currentStyleTheme,
                        mainView__button_lightTheme,
                        mainView__button_darkTheme
                    )
                ]}
                onPress={props.onClick}
                children={props.content}
            />
    );
}
