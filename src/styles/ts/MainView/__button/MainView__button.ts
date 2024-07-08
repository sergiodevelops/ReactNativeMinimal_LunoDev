import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


const MainView__button = () => {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__button: {
                borderColor: currentStyleTheme === 'light' ? '#2d2d2d' : 'white',
                borderStyle: "solid",
                borderWidth: 2,
                padding: `${2}%`,
                userSelect: 'none',
                color: currentStyleTheme === 'light' ? '#2d2d2d' : '#fdfdfd',
                backgroundColor: currentStyleTheme === 'light' ? '#fdfdfd' : '#2d2d2d',
            },
            mainView__button_accept: {
                color: currentStyleTheme === 'light' ? '#2d2d2d' : '#fdfdfd',
                backgroundColor: currentStyleTheme === 'light' ? '#fdfdfd' : '#2d2d2d',
            },
            mainView__button_decline: {
                color: currentStyleTheme === 'light' ? '#2d2d2d' : '#fdfdfd',
                backgroundColor: currentStyleTheme === 'light' ? '#fdfdfd' : '#2d2d2d',
            },
        })
    );
};


export default MainView__button;
