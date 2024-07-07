import {StyleSheet, Dimensions, TransformsStyle} from 'react-native';


const halfWindowsHeight = Dimensions.get('window').height;
const halfWindowsWidth = Dimensions.get('window').width;


const MainView = StyleSheet.create({
    mainView: {
        padding: 10,
        userSelect: 'none', /* Standard syntax */
        height: halfWindowsHeight,
        width: halfWindowsWidth,
    },
    mainView_darkTheme: {
        color: "white",
        backgroundColor: "#181818",
    },
    mainView_lightTheme: {
        color: "black",
        backgroundColor: "white",
    },
});


export default MainView;
