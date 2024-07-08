import {StyleSheet} from 'react-native';


const MainView__button = () => {

    return (
        StyleSheet.create({
            mainView__button: {
                borderStyle: "solid",
                borderWidth: 2,
                padding: `${2}%`,
                userSelect: 'none',
            },
        })
    );
};


export default MainView__button;
