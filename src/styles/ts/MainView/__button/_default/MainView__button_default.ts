import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../../hooks/useStyleThemeStore";


const MainView__button_default = () => {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__button_default: {
                color: currentStyleTheme === 'light' ? '#000000' : '#ffffff',
                backgroundColor: currentStyleTheme === 'light' ? '#6f92ff' : '#0a2e9b',
                borderColor: currentStyleTheme === 'light' ? '#000000' : '#ffffff',
            },
        })
    );
};


export default MainView__button_default;
