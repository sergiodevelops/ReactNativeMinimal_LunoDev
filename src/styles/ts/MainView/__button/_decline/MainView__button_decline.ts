import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../../hooks/useStyleThemeStore";


const MainView__button_decline = () => {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__button_decline: {
                color: currentStyleTheme === 'light' ? '#ffffff' : '#FD6363',
                backgroundColor: currentStyleTheme === 'light' ? '#FD6363' : '#ffffff',
                borderColor: currentStyleTheme === 'light' ? '#2d2d2d' : 'white',
            },
        })
    );
};


export default MainView__button_decline;
