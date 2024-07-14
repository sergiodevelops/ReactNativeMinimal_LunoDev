import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../../hooks/useStyleThemeStore";


const MainView__button_default = () => {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__button_default: {
                color: currentStyleTheme === 'light' ? '#0a2e9b' : '#abbffd',
                borderColor: currentStyleTheme === 'light' ? '#0a2e9b' : '#abbffd',
                backgroundColor: currentStyleTheme === 'light' ? '#abbffd' : '#0a2e9b',
            },
        })
    );
};


export default MainView__button_default;
