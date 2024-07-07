// import useWindowSize from "../../../hooks/useWindowSize";
import {Dimensions} from "react-native";
import {getStylesFromTheme} from "../../../utils/styles";
import useStyleThemeStore from "../../../hooks/useStyleThemeStore";
import MainView from "../../../styles/ts/MainView/MainView";


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
        <main>
            <p style={getStylesFromTheme(
                currentStyleTheme,
                mainView_lightTheme,
                mainView_darkTheme
            )}>
                {`width ${halfWindowsWidth}px / height ${halfWindowsHeight}px`}
            </p>
        </main>
    );
}
