import {StyleSheet, useWindowDimensions} from 'react-native';
import useStyleThemeStore from "../../../hooks/useStyleThemeStore";


const MainView = () => {
    const {width, height} = useWindowDimensions();
    const {currentStyleTheme} = useStyleThemeStore();

    const backgroundColorDark = '#2d2d2d';
    const backgroundColorLight = 'white';


    return (
        StyleSheet.create({
            mainView: {
                color: currentStyleTheme === 'light' ? '#000000' : 'white',
                backgroundColor:  currentStyleTheme === 'dark' ? '#2d2d2d' : 'white',
                userSelect: 'none',
                height: height,
                // width: width,
            },
            mainView__container: {
                padding: 10,
            },
        })
    );
};


export default MainView;
