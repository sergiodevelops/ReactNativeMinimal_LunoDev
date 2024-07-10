import {StyleSheet} from "react-native";
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


const MainView__input = () => {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__input: {
                width: `100%`,
                fontSize: 18,
                padding: 3,
                backgroundColor: "inherit",
                color: "inherit",
                borderColor: 'inherit',
                borderRadius: 5,
                borderWidth: 1,
            },
            mainView__placeholder_color: {
                color: currentStyleTheme === 'light' ? '#333333' : '#b9b9b9',
            },
        })
    );
};


export default MainView__input;
