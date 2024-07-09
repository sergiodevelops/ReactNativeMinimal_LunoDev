import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import MainView from "../styles/ts/MainView/MainView"
import {Button} from "../components/semantic/Button/Button";
import useStyleThemeStore from "../hooks/useStyleThemeStore";
import Paragraph from "../components/semantic/Paragraph/Paragraph";
import Heading from "../components/semantic/Heading/Heading";


function MySemantic() {
    const {
        toogleStyleTheme,
        currentIconStyleTheme,
    } = useStyleThemeStore();


    return (
        <View role={"main"}>
            <Paragraph children={`<main/> (WEB) / <View/> (NATIVE)`}/>
            <Heading children={`React Native & Web (CSR & SSR) & Semantic`}/>
            <Paragraph children={`<p/> (WEB) & <Text/> (NATIVE)`}/>
            <Button
                type={"accept"}
                onPress={toogleStyleTheme}
                children={`Toogle Theme "accept" ${currentIconStyleTheme}`}
            />
            <Button
                type={"decline"}
                onPress={toogleStyleTheme}
                children={`Toogle Theme "decline" ${currentIconStyleTheme}`}
            />
            <Button
                onPress={toogleStyleTheme}
                children={`Toogle Theme "default" ${currentIconStyleTheme}`}
            />
            <Button
                disabled
                onPress={toogleStyleTheme}
                children={`<button/> (WEB) & <Pressable/> (NATIVE)`}
            />
            <Heading
                variant={"h1"}
                children={`<h1/> (WEB) & <Text/> (NATIVE)`}
            />
            <Heading
                variant={"h2"}
                children={`<h2/> (WEB) & <Text/> (NATIVE)`}
            />
            <Heading
                variant={"h3"}
                children={`<h3/> (WEB) & <Text/> (NATIVE)`}
            />
            <Heading
                variant={"h4"}
                children={`<h4/> (WEB) & <Text/> (NATIVE)`}
            />
            <Heading
                variant={"h5"}
                children={`<h5/> (WEB) & <Text/> (NATIVE)`}
            />
            <Heading
                variant={"h6"}
                children={`<h6/> (WEB) & <Text/> (NATIVE)`}
            />

            <View role={"main"}>
                <Paragraph/>
            </View>
        </View>
    );
}

export default function App() {

    const {
        mainView,
        mainView__container,
    } = MainView();


    // example for add semantic for DOM WEB platform output rendering
    return (
        <SafeAreaView>
            <ScrollView
                role={"main"}
                style={[
                    mainView,
                    mainView__container,
                ]}
            >
                <MySemantic/>

                {/*{isWeb() ?
                    <WindowDimensionsWeb/> :
                    <WindowDimensions/>}*/}
                {/*<View>

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
                </View>*/}
            </ScrollView>
        </SafeAreaView>
    );
};
