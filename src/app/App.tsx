import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import MainView from "../styles/ts/MainView/MainView"
import MySemantic from "../components/semantic/MySemantic/MySemantic";


export default function App() {

    const {
        mainView,
    } = MainView();


    return (
        <SafeAreaView>
            <ScrollView style={[mainView]}>
                <MySemantic/>
            </ScrollView>
        </SafeAreaView>
    );
};
