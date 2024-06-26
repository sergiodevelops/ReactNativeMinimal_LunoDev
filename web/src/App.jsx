import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import HelloWorld from "./components/HelloWorld/HelloWorld";


export default function App() {
    return (
        <>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: "bold", color: "blue" }}>My first RN Minimal App</Text>
                    <Text style={{ fontSize: 24 }}>by <Text style={{ fontWeight: "bold" }}>LUNO⚛Dev</Text></Text>
                </View>
            </SafeAreaView>
            <HelloWorld/>
        </>
    );
};
