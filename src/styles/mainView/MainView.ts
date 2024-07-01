import {StyleSheet, Dimensions, TransformsStyle} from 'react-native';


const halfWindowsHeight = Dimensions.get('window').height


const MainView = StyleSheet.create({
    mainView: {
        // "-webkit-user-select": 'none', /* Safari */
        // "-ms-user-select": 'none', /* IE 10 and IE 11 */
        userSelect: 'none', /* Standard syntax */
        minHeight: halfWindowsHeight,
        padding: `${3}%`,
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
