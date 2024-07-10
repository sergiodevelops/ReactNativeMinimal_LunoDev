import {StyleSheet, useWindowDimensions} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


export default function MainView__fieldset(){
    const backgroundColorDark = '#3d3d3d';
    const backgroundColorLight = '#ffffff';
    const colorLight = '#2d2d2d';
    const colorDark = '#ffffff';

    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__fieldset: {
                padding: 5,
                borderWidth: 0,
            },
        })
    );
};
