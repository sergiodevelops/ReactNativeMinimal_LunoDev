import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import RandomList from "../components/HelloWorld/RandomList";
import MainView from "../styles/ts/mainView/MainView"
import {getStylesFromTheme} from "../utils/styles";
import {MainViewButton} from "../components/MainViewButton/MainViewButton";
import useStyleThemeStore from "../hooks/useStyleThemeStore";
import WindowDimensions from "../components/tools/WindowDimensions/WindowDimensions";
// TODO fix scss sass loader files error
// import styles from '../styles/scss/mainView/MainView.module.scss'


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
                        <WindowDimensions />
                        {/*<div style={styles["test-de-fede"]}></div>*/}
                        <View>
                            <MainViewButton
                                content={<Text>{`${currentIconStyleTheme}`}</Text>}
                                onClick={toogleStyleTheme}
                            />

                            {/*<StatusBar barStyle={"dark-content"}/>*/}
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
