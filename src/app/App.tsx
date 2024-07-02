import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RandomList from "../components/HelloWorld/RandomList";
import MainView from "../styles/mainView/MainView"
import {getStylesFromTheme} from "../utils/styles";
import {MainViewButton} from "../components/MainViewButton/MainViewButton";
import useStyleThemeStore from "../hooks/useStyleThemeStore";
import {Provider} from "react-redux";
import {store} from "./store";


const AppWithoutStore = () => {
    const {currentStyleTheme, toogleStyleTheme, currentIconStyleTheme} = useStyleThemeStore()
    const {
        mainView,
        mainView_lightTheme,
        mainView_darkTheme,
    } = MainView;


    return (
        <SafeAreaView>
            <div style={{
                ...mainView,
                ...getStylesFromTheme(
                    currentStyleTheme,
                    mainView_lightTheme,
                    mainView_darkTheme
                ),
            }}>
                <MainViewButton
                    content={<p>{`${currentIconStyleTheme}`}</p>}
                    onClick={toogleStyleTheme}
                />

                <StatusBar barStyle={"dark-content"}/>
                <div>
                    <h1>{`Minimal React (Native & Web) App`}</h1>
                    <h2>{`by `}<strong>{`LUNO⚛Dev`}</strong></h2>
                    <p>Hola soy un P con el contenido de la pag</p>
                </div>
                <RandomList/>
            </div>
        </SafeAreaView>
    );
};


export default function App(){
    return (<Provider store={store} children={<AppWithoutStore/>}/>)
}
