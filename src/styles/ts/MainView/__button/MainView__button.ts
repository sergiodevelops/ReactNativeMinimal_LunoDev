import {StyleSheet} from 'react-native';


const MainView__button = () => {

    return (
        StyleSheet.create({
            mainView__button_container: {
                zIndex: -1,
                width: '100%',
                userSelect: 'none',
                padding: 8,
            },
            mainView__button: {
                padding: 2,
                borderStyle: "solid",
                borderWidth: 1,
                borderRadius: 8,
            },
        })
    );
};


export default MainView__button;
