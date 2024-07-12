import {StyleSheet} from "react-native";
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


const MainView__input = () => {
    const {currentStyleTheme} = useStyleThemeStore();

    const backgroundColorLight = '#ffffff';
    const backgroundColorDark = '#2d2d2d';
    const colorLight = '#2d2d2d';
    const colorDark = '#ffffff';

    return (
        StyleSheet.create({
            mainView__input: {
                fontSize: 18,
                padding: 5,
                backgroundColor: currentStyleTheme === 'light' ? backgroundColorLight : backgroundColorDark,
                color: currentStyleTheme === 'light' ? colorLight : colorDark,
                borderColor: 'inherit',
                borderWidth: 1,
            },
            mainView__textarea_container: {
                userSelect: 'none',
                width: `100%`,
                padding: 5,
            },
            mainView__textarea: {
                fontSize: 18,
                backgroundColor: currentStyleTheme === 'light' ? backgroundColorLight : backgroundColorDark,
                color: currentStyleTheme === 'light' ? colorLight : colorDark,
                borderColor: 'inherit',
                borderWidth: 1,
            },
            mainView__placeholder_color: {
                color: currentStyleTheme === 'light' ? '#333333' : '#b9b9b9',
            },
            mainView__selectOption_container: {
                backgroundColor: currentStyleTheme === 'light' ? backgroundColorLight : backgroundColorDark,
                color: currentStyleTheme === 'light' ? colorLight : colorDark,
                padding: 0,
            },
            mainView__selectOption: {
                padding: 5,
            },
        })
    );
};


export default MainView__input;
