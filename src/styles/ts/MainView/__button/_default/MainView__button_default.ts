import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../../hooks/useStyleThemeStore";


const MainView__button_default = () => {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__button_default: {
                color: currentStyleTheme === 'light' ? '#000000' : '#ffffff',
                backgroundColor: currentStyleTheme === 'light' ? '#ffffff' : '#000000',
                borderColor: currentStyleTheme === 'light' ? '#000000' : '#ffffff',
            },
        })
    );
};


export default MainView__button_default;
