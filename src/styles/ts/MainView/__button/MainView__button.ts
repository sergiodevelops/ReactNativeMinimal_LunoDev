import {StyleSheet} from 'react-native';


const MainView__button = () => {

    return (
        StyleSheet.create({
            mainView__button: {
                userSelect: 'none',
                padding: `1%`,
            },
            mainView__button_container: {
                padding: `${2}%`,
                borderRadius:5,
                borderStyle: "solid",
                borderWidth: 2,
            },
        })
    );
};


export default MainView__button;
