import {StyleSheet, Dimensions} from 'react-native';


const halfWindowsHeight = Dimensions.get('window').height


const mainView = StyleSheet.create({
    container: {
        minHeight: halfWindowsHeight,
        padding: `${3}%`,
    },
    container_darkTheme: {
        color: "white",
        backgroundColor: "#181818",
    },
    container_lightTheme: {
        color: "black",
        backgroundColor: "white",
    },
});


export default mainView;
