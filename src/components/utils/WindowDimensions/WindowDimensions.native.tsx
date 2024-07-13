// import useWindowSize from "../../../hooks/useWindowSize";
import {Text, View, Dimensions} from "react-native";


export default function WindowDimensions() {
    // const size = useWindowSize();

    const halfWindowsHeight = Dimensions.get('window').height;
    const halfWindowsWidth = Dimensions.get('window').width;


    return (
        <View>
            <Text>
                {`width ${halfWindowsWidth}px / height ${halfWindowsHeight}px`}
            </Text>
        </View>
    );
}
