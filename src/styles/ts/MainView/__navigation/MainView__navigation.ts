import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


export default function MainView__navigation() {

    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__navigation_container: {
                justifyContent: "center",
            },
            mainView__navigation: {
                borderColor: currentStyleTheme === 'light' ? '#4b4b4b' : '#E5E7E8A0',
                borderWidth: 0.5,
                borderStyle: "solid",
            },
        })
    );
};
