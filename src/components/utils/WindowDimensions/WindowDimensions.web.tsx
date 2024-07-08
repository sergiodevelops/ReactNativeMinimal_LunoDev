import {getStylesFromTheme} from "../../../utils/styles";
import useStyleThemeStore from "../../../hooks/useStyleThemeStore";
import MainView from "../../../styles/ts/MainView/MainView";
import {useWindowDimensions} from "react-native";


export default function WindowDimensions() {
    const size = useWindowDimensions();
    // const size = useWindowSize();
    const {currentStyleTheme} = useStyleThemeStore()

    const {
        mainView,
        mainView__container,
        mainView_lightTheme,
        mainView_darkTheme,
    } = MainView;


    return (
        <main style={getStylesFromTheme(
            currentStyleTheme,
            mainView_lightTheme,
            mainView_darkTheme)}>
            <p>
                {/*{`width ${size.width}px / height ${size.height}px`}*/}
                {`width ${size.width}px / height ${size.height}px`}
            </p>
        </main>
    );
}
