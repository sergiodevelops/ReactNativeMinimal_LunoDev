import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import HelloWorld from "./components/HelloWorld/HelloWorld";


const App = () => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <View>
                <Text>React Native and Web Minimal App</Text>
                <Text>by <Text>LUNO⚛Dev</Text></Text>
            </View>
            <HelloWorld/>
        </SafeAreaView>
    );
};


export default App;
