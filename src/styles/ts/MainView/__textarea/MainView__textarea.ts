import {StyleSheet} from "react-native";
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


const MainView__textarea = () => {
    const {currentStyleTheme} = useStyleThemeStore();

    const backgroundColorLight = '#ffffff';
    const backgroundColorDark = '#2d2d2d';
    const colorLight = '#2d2d2d';
    const colorDark = '#ffffff';

    return (
        StyleSheet.create({
            mainView__textarea_container: {
                userSelect: 'none',
                width: `100%`,
                padding: 3,
            },
            mainView__textarea: {
                fontSize: 18,
                borderColor: 'inherit',
                borderWidth: 1,
            },
        })
    );
};


export default MainView__textarea;
