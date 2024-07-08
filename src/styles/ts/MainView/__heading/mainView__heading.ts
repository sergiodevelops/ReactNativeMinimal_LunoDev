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
                fontSize: 44,
            },
            mainView__heading_h2: {
                fontSize: 41,
            },
            mainView__heading_h3: {
                fontSize: 38,
            },
            mainView__heading_h4: {
                fontSize: 34,
            },
            mainView__heading_h5: {
                fontSize: 32,
            },
            mainView__heading_h6: {
                fontSize: 28,
            },
        })
    );
};


export default MainView__heading;
