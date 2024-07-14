import {StyleSheet} from "react-native";
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


const MainView__select = () => {
    const {currentStyleTheme} = useStyleThemeStore();

    const backgroundColorLight = '#ffffff';
    const backgroundColorDark = '#2d2d2d';
    const colorLight = '#2d2d2d';
    const colorDark = '#ffffff';

    return (
        StyleSheet.create({
            mainView__selectOption_container: {
                padding: 3,
            },
            mainView__selectOption: {
                padding: 5,
            },
        })
    );
};


export default MainView__select;
