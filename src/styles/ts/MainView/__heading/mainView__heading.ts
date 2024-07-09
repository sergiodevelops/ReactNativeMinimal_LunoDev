import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


const MainView__heading = () => {
    const {currentStyleTheme} = useStyleThemeStore();

    const colorDark = '#ffffff';
    const colorLight = '#000000';


    return (
        StyleSheet.create({
            mainView__heading: {
                fontWeight: "bold",
                color: currentStyleTheme === 'light' ? colorLight : colorDark,
            },
            mainView__heading_h1: {
                fontSize: 34,
            },
            mainView__heading_h2: {
                fontSize: 32,
            },
            mainView__heading_h3: {
                fontSize: 30,
            },
            mainView__heading_h4: {
                fontSize: 28,
            },
            mainView__heading_h5: {
                fontSize: 26,
            },
            mainView__heading_h6: {
                fontSize: 24,
            },
        })
    );
};


export default MainView__heading;
