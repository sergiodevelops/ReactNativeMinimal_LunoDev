import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


export default function MainView__footer() {
    const backgroundColorDark = '#4b4b4b';
    const backgroundColorLight = '#E5E7E8A0';
    const colorLight = '#4b4b4b';
    const colorDark = '#E5E7E8A0';

    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__footer_container: {
                padding: 5,
            },
            mainView__footer: {
                borderColor: currentStyleTheme === 'light' ? colorLight : colorDark,
            },
        })
    );
};
