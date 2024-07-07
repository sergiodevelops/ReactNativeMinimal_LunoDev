import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import RandomList from "../components/HelloWorld/RandomList";
import MainView from "../styles/ts/MainView/MainView"
import {getStylesFromTheme} from "../utils/styles";
import {MainViewButton} from "../components/MainViewButton/MainViewButton";
import useStyleThemeStore from "../hooks/useStyleThemeStore";
import WindowDimensions from "../components/utils/WindowDimensions/WindowDimensions.native";
import WindowDimensionsWeb from "../components/utils/WindowDimensions/WindowDimensions.web";
import ReactNativeComponentWrapper from "../components/utils/PlatformWrapper/PlatformWrapper";
import {isWeb} from "../utils/platform";


export default function App() {
    const {currentStyleTheme, toogleStyleTheme, currentIconStyleTheme} = useStyleThemeStore()
    const {
        mainView,
        mainView_lightTheme,
        mainView_darkTheme,
    } = MainView;


    return (
        <SafeAreaView>
            <View style={{
                ...mainView,
                ...getStylesFromTheme(
                    currentStyleTheme,
                    mainView_lightTheme,
                    mainView_darkTheme
                ),
            }}>
                {isWeb() ?
                    <WindowDimensionsWeb/> :
                    <WindowDimensions/>}
                <View>
                    <MainViewButton
                        content={<Text>{`${currentIconStyleTheme}`}</Text>}
                        onClick={toogleStyleTheme}
                    />
                    <View>
                        <Text style={[getStylesFromTheme(
                            currentStyleTheme,
                            mainView_lightTheme,
                            mainView_darkTheme
                        )]}>{`Minimal React (Native & Web) App`}</Text>
                        <Text style={[getStylesFromTheme(
                            currentStyleTheme,
                            mainView_lightTheme,
                            mainView_darkTheme
                        )]}>{`by `}<Text>{`LUNO⚛Dev`}</Text></Text>
                        <Text style={[getStylesFromTheme(
                            currentStyleTheme,
                            mainView_lightTheme,
                            mainView_darkTheme
                        )]}>Hola soy un P con el contenido de la pag</Text>
                    </View>
                    <RandomList/>
                </View>
            </View>
        </SafeAreaView>
    );
};
