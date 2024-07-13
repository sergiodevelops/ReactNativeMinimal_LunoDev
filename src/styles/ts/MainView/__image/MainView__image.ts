import {StyleSheet} from 'react-native';
import useStyleThemeStore from "../../../../hooks/useStyleThemeStore";


const MainView__image = () => {
    const {currentStyleTheme} = useStyleThemeStore();

    const colorDark = '#ffffff';
    const colorLight = '#000000';


    return (
        StyleSheet.create({
            mainView__image_container: {
                padding: 5,
            },
            mainView__image: {
                width: '100%',
            },
        })
    );
};


export default MainView__image;
