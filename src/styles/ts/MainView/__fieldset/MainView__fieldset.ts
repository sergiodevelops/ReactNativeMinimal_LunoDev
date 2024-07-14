import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


export default function MainView__fieldset() {
    const backgroundColorDark = '#4b4b4b';
    const backgroundColorLight = '#E5E7E8A0';
    const colorLight = '#4b4b4b';
    const colorDark = '#E5E7E8A0';

    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__fieldset_container: {
                padding: 3,
            },
            mainView__fieldset: {
                backgroundColor: currentStyleTheme === 'light' ? backgroundColorLight : backgroundColorDark,
                borderWidth: 0.5,
                borderStyle: "solid",
                borderColor: currentStyleTheme === 'light' ? colorLight : colorDark,
            },
        })
    );
};
