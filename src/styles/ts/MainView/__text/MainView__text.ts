import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


const MainView__text = () => {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__text_color: {
                color: currentStyleTheme === 'light' ? '#000000' : '#ffffff',
            },
            mainView__text_bold: {
                fontWeight: "bold",
            },
            mainView__placeholder_color: {
                color: currentStyleTheme === 'light' ? '#333333' : '#b9b9b9',
            },
        })
    );
};


export default MainView__text;
