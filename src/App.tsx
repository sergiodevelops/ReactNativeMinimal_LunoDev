import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import HelloWorld from "./components/HelloWorld/HelloWorld";
import mainView from "./styles/mainView/mainView"


const App = () => {
    const {
        container,
        container_darkTheme,
        container_lightTheme,
    } = mainView;
    return (
        <SafeAreaView style={[container, container_lightTheme, container_darkTheme]}>
            <StatusBar barStyle={"dark-content"}/>
            <View>
                <Text>React Native and Web Minimal App</Text>
                <Text>by <Text>LUNO⚛Dev</Text></Text>
            </View>
            <HelloWorld/>
        </SafeAreaView>
    );
};


export default App;
