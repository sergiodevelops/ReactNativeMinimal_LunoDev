import {StyleSheet, useWindowDimensions} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


export default function MainView__form(){
    const backgroundColorDark = '#3d3d3d';
    const backgroundColorLight = '#e1dfdf';
    const colorLight = '#2d2d2d';
    const colorDark = '#ffffff';

    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__form: {
                padding: 10,
                fontSize: 20,
                color: currentStyleTheme === 'light' ? colorLight : colorDark,
                backgroundColor:  currentStyleTheme === 'light' ? backgroundColorLight : backgroundColorDark,
                borderColor: currentStyleTheme === 'light' ? colorLight : colorDark,
                borderWidth: 0,
                borderRadius: 5,
            },
        })
    );
};
