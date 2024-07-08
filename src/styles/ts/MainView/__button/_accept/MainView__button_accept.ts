import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../../hooks/useStyleThemeStore";


const MainView__button_accept = () => {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__button_accept: {
                color: currentStyleTheme === 'light' ? '#568525' : '#A5FE4C',
                backgroundColor: currentStyleTheme === 'light' ? '#A5FE4C' : '#568525',
                borderColor: currentStyleTheme === 'light' ? '#2d2d2d' : 'white',
            },
        })
    );
};


export default MainView__button_accept;
