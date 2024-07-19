import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


export default function MainView__anchor() {
    const {currentStyleTheme} = useStyleThemeStore();


    return (
        StyleSheet.create({
            mainView__anchor: {
                width: '100%',
                justifyContent: 'center',
                color: currentStyleTheme === 'light' ? '#7100b4' : '#db9cff',
                cursor: 'pointer',
                textDecorationLine: 'none',
                textDecorationColor: currentStyleTheme === 'light' ? '#db9cff' : '#7100b4',
                textDecorationStyle: 'solid',
                textAlign: 'center',
            },
            mainView__anchor_hover: {
                color: currentStyleTheme === 'light' ? '#016428' : '#2eff82',
            },
        })
    );
};
