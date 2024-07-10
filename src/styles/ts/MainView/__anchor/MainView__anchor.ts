import {StyleSheet, useWindowDimensions} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


export default function MainView__anchor(){
    const colorLight = '#2d2d2d';
    const colorDark = '#ffffff';

    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__anchor: {
                color: currentStyleTheme === 'light' ? colorLight : colorDark,
                cursor: 'pointer',
                textDecorationLine: 'none',
                textDecorationColor: currentStyleTheme === 'light' ? colorLight : colorDark,
                textDecorationStyle: 'solid',
            },
        })
    );
};
