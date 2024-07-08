import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import MainView from "../styles/ts/MainView/MainView"
import {Button} from "../components/semantic/Button/Button";
import useStyleThemeStore from "../hooks/useStyleThemeStore";
import Paragraph from "../components/semantic/Paragraph/Paragraph";
import Heading from "../components/semantic/Heading/Heading";
import mainView__text from "../styles/ts/MainView/__text/MainView__text";
import MainView__text from "../styles/ts/MainView/__text/MainView__text";


export default function App() {
    const {
        toogleStyleTheme,
        currentIconStyleTheme,
    } = useStyleThemeStore();
    const {
        mainView,
        mainView__container,
    } = MainView();


    // example for add semantic for DOM web platform output rendering
    return (
        <SafeAreaView>
            <ScrollView
                role={"main"}
                style={[
                    mainView,
                    mainView__container,
                ]}
            >
                <View role={"main"}>
                    <Paragraph>
                        {`This is a <main/> (web) and <View/> (native)`}
                    </Paragraph>
                </View>
                <Paragraph>{`This is a <p/> (web) and <Text/> (native)`}</Paragraph>
                <Button
                    type={"accept"}
                    onPress={toogleStyleTheme}
                    children={`Toogle Theme 1 ${currentIconStyleTheme}`}
                />
                <Button
                    type={"decline"}
                    onPress={toogleStyleTheme}
                    children={`Toogle Theme 2 ${currentIconStyleTheme}`}
                />
                <Button
                    onPress={toogleStyleTheme}
                    children={`Toogle Theme 3 ${currentIconStyleTheme}`}
                />
                <Button
                    disabled
                    onPress={toogleStyleTheme}
                    children={`Toogle Theme 4 ${currentIconStyleTheme}`}
                />
                <Heading
                    variant={"h1"}
                    children={`This is a <h1/> (web) and <Text/> (native)`}
                />
                <Heading
                    variant={"h2"}
                    children={`This is a <h2/> (web) and <Text/> (native)`}
                />
                <Heading
                    variant={"h3"}
                    children={`This is a <h3/> (web) and <Text/> (native)`}
                />
                <Heading
                    variant={"h4"}
                    children={`This is a <h4/> (web) and <Text/> (native)`}
                />
                <Heading
                    variant={"h5"}
                    children={`This is a <h5/> (web) and <Text/> (native)`}
                />
                <Heading
                    variant={"h6"}
                    children={`This is a <h6/> (web) and <Text/> (native)`}
                />

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
