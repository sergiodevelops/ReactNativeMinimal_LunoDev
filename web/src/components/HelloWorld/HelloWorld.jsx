import React from "react";
import {ScrollView, Text, View} from "react-native";
import styles from "./HelloWorld.styles";


export default function HelloWorld(){
    const {
        container,
        hello
    } = styles;


    const mockedList = Array.from(
        {length: 40},
        () => Math.floor(Math.random() * 40)
    );


    return (
        <ScrollView style={{backgroundColor: "blue"}}>
            <View style={container}>
                {mockedList.map((item, index) => (
                    <Text
                        onPress={()=>alert("me soltaste")}
                        key={index}
                        style={hello}>
                        HELLO WORLD !! {item} {index}
                    </Text>
                ))}
            </View>
        </ScrollView>
    );
};
