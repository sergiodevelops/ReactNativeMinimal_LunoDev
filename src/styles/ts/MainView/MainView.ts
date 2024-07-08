import {StyleSheet, useWindowDimensions} from 'react-native';
import useStyleThemeStore from "../../../hooks/useStyleThemeStore";


const MainView = () => {
    const {height} = useWindowDimensions();
    const {currentStyleTheme} = useStyleThemeStore();

    const backgroundColorDark = '#2d2d2d';
    const backgroundColorLight = '#ffffff';
    const colorLight = '#2d2d2d';
    const colorDark = '#ffffff';


    return (
        StyleSheet.create({
            mainView: {
                color: currentStyleTheme === 'light' ? colorLight : colorDark,
                backgroundColor:  currentStyleTheme === 'light' ? backgroundColorLight : backgroundColorDark,
                userSelect: 'none',
                height: height,
            },
            mainView__container: {
                padding: 10,
            },
        })
    );
};


export default MainView;
