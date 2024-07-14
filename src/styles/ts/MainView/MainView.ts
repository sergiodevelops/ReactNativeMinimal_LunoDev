import {StyleSheet, useWindowDimensions} from 'react-native';
import useStyleThemeStore from "../../../hooks/useStyleThemeStore";


const MainView = () => {
    const {width ,height} = useWindowDimensions();
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView_container: {
                backgroundColor:  currentStyleTheme === 'light' ? '#ffffff' : '#2d2d2d',
            },
            mainView: {
                minHeight: height,
                width: width,
            },
        })
    );
};


export default MainView;
