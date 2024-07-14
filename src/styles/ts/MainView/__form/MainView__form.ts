import {StyleSheet, useWindowDimensions} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


export default function MainView__form(){

    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__form: {
                padding: 10,
                fontSize: 20,
                color: currentStyleTheme === 'light' ? '#2d2d2d' : '#ffffff',
                backgroundColor:  currentStyleTheme === 'light' ? '#e1dfdf' : '#3d3d3d',
                borderColor: currentStyleTheme === 'light' ? '#2d2d2d' : '#ffffff',
                borderWidth: 0,
            },
        })
    );
};
