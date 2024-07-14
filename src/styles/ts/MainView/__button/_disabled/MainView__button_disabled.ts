import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../../hooks/useStyleThemeStore";


const MainView__button_disabled = () => {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__button_disabled: {
                cursor: 'auto',
                color: currentStyleTheme === 'light' ? '#605e5e' : '#b4b1b1',
                borderColor: currentStyleTheme === 'light' ? '#605e5e' : '#b4b1b1',
                backgroundColor: currentStyleTheme === 'light' ? '#b4b1b1' : '#605e5e',
            },
        })
    );
};


export default MainView__button_disabled;
