import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../components/screens/HomeScreen/HomeScreen";
import SemanticScreen from "../components/screens/SemanticScreen/SemanticScreen";
import ReferencesScreen from "../components/screens/ReferencesScreen/ReferencesScreen";
// import AnimationScreen from "../components/screens/AnimationScreen/AnimationScreen"; // TODO


export default function App() {
    const Stack = createNativeStackNavigator();

    // https://reactnavigation.org/docs/hello-react-navigation/
    // https://reactnavigation.org/docs/redux-integration/
    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"home"}>
                    <Stack.Screen
                        navigationKey={'semantic'}
                        name={'semantic'}
                        component={SemanticScreen}
                        options={{title: 'SEMANTIC'}}
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
