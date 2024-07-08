import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


const MainView__text = () => {
    const {currentStyleTheme} = useStyleThemeStore();

    const colorDark = '#ffffff';
    const colorLight = '#000000';


    return (
        StyleSheet.create({
            mainView__text: {
                fontSize: 20,
                color: currentStyleTheme === 'light' ? colorLight : colorDark,
            },
            mainView__text_bold: {
                fontWeight: "bold",
            },
        })
    );
};


export default MainView__text;
