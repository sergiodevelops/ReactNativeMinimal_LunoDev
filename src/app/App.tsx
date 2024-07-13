import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {DetailsScreen} from "../components/screens/DetailsScreen/DetailsScreen";
import {HomeScreen} from "../components/screens/HomeScreen/HomeScreen";


export type NavigationProps = { navigation: { navigate(screen: string): void } }
export default function App() {

    const Stack = createNativeStackNavigator();


    return (
        // https://reactnavigation.org/docs/hello-react-navigation/
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"home"}>
                <Stack.Screen
                    navigationKey={'details'}
                    name={'details'}
                    component={DetailsScreen}
                    options={{title: 'DETAILS'}}
                />
                <Stack.Screen
                    navigationKey={'home'}
                    name={'home'}
                    component={HomeScreen}
                    options={{title: 'HOME'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
