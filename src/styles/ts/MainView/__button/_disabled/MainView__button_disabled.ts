import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../../hooks/useStyleThemeStore";


const MainView__button_disabled = () => {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__button_disabled: {
                cursor: 'auto',
                color: currentStyleTheme === 'light' ? '#605e5e' : '#a9a7a7',
                backgroundColor: currentStyleTheme === 'light' ? '#a9a7a7' : '#605e5e',
                borderColor: currentStyleTheme === 'light' ? '#605e5e' : '#a9a7a7',
            },
        })
    );
};


export default MainView__button_disabled;
