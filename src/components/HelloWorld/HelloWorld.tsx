import React, {useState} from "react";
import {Button, ScrollView, Text, View} from "react-native";
import PizzaWordTraslate from "../PizzaWordTraslate/PizzaWordTraslate.web";
import mainView__button from "../../styles/mainView/__button/mainView__button";
import mainView from "../../styles/mainView/mainView";


export default function HelloWorld(){
    const [them, setTheme] = useState<'light' | 'dark'>('light')
    const {
        container,
        container__button,
    } = mainView__button;
    const {
        container_lightTheme,
        container_darkTheme,
    } = mainView;
    const mockedList = Array.from(
        {length: 40},
        () => Math.floor(Math.random() * 40)
    );


    function handleOnPress() {
        alert("me soltaste");
    }

    function handleOnPressButtonToogleTheme() {
        setTheme(them !== 'dark' ? 'dark' : 'light');
    }


    function extracted() {
        return them === 'light' ?
            container_lightTheme :
            container_darkTheme;
    }

    return (
        <ScrollView style={container_lightTheme}>
            <PizzaWordTraslate/>

            <View style={container}>
                <View style={[
                    container__button,
                    extracted(),
                ]}>
                    <Button
                        onPress={handleOnPressButtonToogleTheme}
                        title={`them --> ${them}`}
                    />
                </View>

                {mockedList.map((item: number, index: number) => (
                    <View style={container__button}>
                        <Button
                            onPress={handleOnPress}
                            key={index}
                            title={`Hello World ${item} ${index}`}
                        />
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};
