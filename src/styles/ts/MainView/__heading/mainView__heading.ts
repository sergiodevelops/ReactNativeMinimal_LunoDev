import {StyleSheet} from 'react-native';


const MainView__heading = () => {

    return (
        StyleSheet.create({
            mainView__heading: {
                textAlign: "center",
                fontWeight: "bold",
            },
            mainView__heading_h1: {
                fontSize: 44,
            },
            mainView__heading_h2: {
                fontSize: 40,
            },
            mainView__heading_h3: {
                fontSize: 36,
            },
            mainView__heading_h4: {
                fontSize: 32,
            },
            mainView__heading_h5: {
                fontSize: 28,
            },
            mainView__heading_h6: {
                fontSize: 24,
            },
        })
    );
};


export default MainView__heading;
