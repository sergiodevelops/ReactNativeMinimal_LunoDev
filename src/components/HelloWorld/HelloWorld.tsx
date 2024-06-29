import React from "react";
import {ScrollView, Text, View} from "react-native";
import styles from "./HelloWorld.styles";
import PizzaWordTraslate from "../PizzaWordTraslate/PizzaWordTraslate.web";


export default function HelloWorld(){
    const {
        container,
        hello,
    } = styles;


    const mockedList = Array.from(
        {length: 40},
        () => Math.floor(Math.random() * 40)
    );


    function handleOnPress() {
        alert("me soltaste");
    }


    return (
        <ScrollView style={{backgroundColor: "blue"}}>
            <PizzaWordTraslate/>
            <View style={container}>
                {mockedList.map((item: number, index: number) => (
                    <Text
                        onPress={handleOnPress}
                        key={index}
                        style={hello}
                    >
                        {`Hello World ${item} ${index}`}
                    </Text>
                ))}
            </View>
        </ScrollView>
    );
};
