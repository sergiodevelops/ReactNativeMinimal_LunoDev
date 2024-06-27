import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import HelloWorld from "./components/HelloWorld/HelloWorld";


export default function App() {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <View>
                <Text style={{fontSize: 28, color: "blue"}}>My first RN Minimal App</Text>
                <Text style={{fontSize: 24}}>by <Text>LUNO⚛Dev</Text></Text>
            </View>
            <HelloWorld/>
        </SafeAreaView>
    );
};
