import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../../hooks/useStyleThemeStore";


const MainView__button_decline = () => {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__button_decline: {
                color: currentStyleTheme === 'light' ? '#ad1e1e' : '#f8c0c0',
                borderColor: currentStyleTheme === 'light' ? '#ad1e1e' : '#f8c0c0',
                backgroundColor: currentStyleTheme === 'light' ? '#f8c0c0' : '#ad1e1e',
            },
        })
    );
};


export default MainView__button_decline;
