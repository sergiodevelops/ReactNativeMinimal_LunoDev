import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


export default function MainView__fieldset() {

    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__fieldset_container: {
                padding: 3,
            },
            mainView__fieldset: {
                borderWidth: 0.5,
                borderStyle: "solid",
                borderColor: currentStyleTheme === 'light' ? '#4b4b4b' : '#E5E7E8A0',
            },
        })
    );
};
