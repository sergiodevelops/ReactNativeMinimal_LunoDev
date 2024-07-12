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
                // width: '100%',
                // display: "flex",
                // alignItems: 'flex-end',
            },
            mainView__image: {
                resizeMode: 'contain',
                width: '100%',
                // height: 120,
            },
        })
    );
};


export default MainView__image;
