import React from "react";
import {Text, View} from 'react-native';


export default function RandomList(){

    const mockedList = Array.from(
        {length: 3},
        () => Math.floor(Math.random() * 40)
    );


    return (
        <View>
            <Text>
                {/*{mockedList.map((item: number, index: number) => (`Hello World ${item} ${index}`))}*/}
            </Text>

        </View>
    );
};
