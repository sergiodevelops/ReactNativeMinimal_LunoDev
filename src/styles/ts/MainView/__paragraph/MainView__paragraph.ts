import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


const MainView__paragraph = () => {
    const {currentStyleTheme} = useStyleThemeStore();

    const colorDark = '#ffffff';
    const colorLight = '#000000';


    return (
        StyleSheet.create({
            mainView__paragraph: {
                textAlign: 'justify',
                margin: 0,
                fontSize: 20, //TODO fare atenzione qui
            },
            mainView__paragraph_bold: {
                fontWeight: "bold",
            },
            mainView__paragraph_default: {
                color: currentStyleTheme === 'light' ? colorLight : colorDark,
            },
        })
    );
};


export default MainView__paragraph;
