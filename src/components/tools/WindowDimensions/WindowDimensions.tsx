// import useWindowSize from "../../../hooks/useWindowSize";
import {Text, View, Dimensions} from "react-native";
import {getStylesFromTheme} from "../../../utils/styles";
import useStyleThemeStore from "../../../hooks/useStyleThemeStore";
import MainView from "../../../styles/ts/mainView/MainView";


export default function WindowDimensions() {
    // const size = useWindowSize();
    const {currentStyleTheme} = useStyleThemeStore()

    const halfWindowsHeight = Dimensions.get('window').height;
    const halfWindowsWidth = Dimensions.get('window').width;
    const {
        mainView_lightTheme,
        mainView_darkTheme,
    } = MainView;


    return (
        <View>
            <Text style={[getStylesFromTheme(
                currentStyleTheme,
                mainView_lightTheme,
                mainView_darkTheme
            )]}>
                {`width ${halfWindowsWidth}px / height ${halfWindowsHeight}px`}
            </Text>
        </View>
    );
}