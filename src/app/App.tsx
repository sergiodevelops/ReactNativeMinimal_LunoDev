import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../components/screens/HomeScreen/HomeScreen";
import SemanticScreen from "../components/screens/SemanticScreen/SemanticScreen";
import ReferencesScreen from "../components/screens/ReferencesScreen/ReferencesScreen";
import {View} from "react-native";
import MainView from "../styles/ts/MainView/MainView";
import MainView__text from "../styles/ts/MainView/__text/MainView__text";
// import AnimationScreen from "../components/screens/AnimationScreen/AnimationScreen"; // TODO


function AppHeader(props: { children: string, tintColor: string }) {
    return(
        <View>

        </View>
    );
}

export default function App() {
    const {mainView_header} = MainView();
    const {mainView__text_color} = MainView__text();
    const Stack = createNativeStackNavigator();

    // https://reactnavigation.org/docs/hello-react-navigation/
    // https://reactnavigation.org/docs/redux-integration/
    return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={"home"}
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: mainView_header.backgroundColor,
                        },
                        headerTintColor: mainView__text_color.color,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                >
                    <Stack.Screen
                        navigationKey={'semantic'}
                        name={'semantic'}
                        component={SemanticScreen}
                        options={{
                            title: 'SEMANTIC',
                            // headerTitle: (props) => <AppHeader {...props} />
                    }}
                    />
                    <Stack.Screen
                        navigationKey={'reference'}
                        name={'reference'}
                        component={ReferencesScreen}
                        options={{title: 'REFERENCE'}}
                    />
                    {/*<Stack.Screen // TODO
                    navigationKey={'animation'}
                    name={'animation'}
                    component={AnimationScreen}
                    options={{title: 'ANIMATION'}}
                />*/}
                    <Stack.Screen
                        navigationKey={'home'}
                        name={'home'}
                        component={HomeScreen}
                        options={{title: 'HOME'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    );
}
