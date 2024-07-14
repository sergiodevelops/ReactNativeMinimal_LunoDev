import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../../hooks/useStyleThemeStore";


const MainView__button_accept = () => {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__button_accept: {
                color: currentStyleTheme === 'light' ? '#2d5901' : '#A5FE4C',
                borderColor: currentStyleTheme === 'light' ? '#2d5901' : '#A5FE4C',
                backgroundColor: currentStyleTheme === 'light' ? '#A5FE4C' : '#2d5901',
            },
        })
    );
};


export default MainView__button_accept;
