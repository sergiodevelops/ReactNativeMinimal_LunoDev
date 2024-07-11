import {View, ViewProps} from "react-native";
import {CSSProperties, HTMLAttributes} from "react";
import {isWeb} from "../../../utils/platform";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import MainView__fieldset from "../../../styles/ts/MainView/__fieldset/MainView__fieldset";


type HeaderProps = ViewProps & HTMLAttributes<HTMLElement>;
export default function Header(props: HeaderProps) {
    // https://www.w3schools.com/tags/tag_header.asp
    // https://stackoverflow.com/questions/58381568/how-to-design-fieldset-legend-using-react-native
    const {mainView__fieldset} = MainView__fieldset();


    return (
        isWeb() ?
            <header
                {...props as HTMLAttributes<HTMLElement>}
                style={{
                    ...props.style as CSSProperties,
                }}
            /> :
            <View
                {...props as ViewProps}
                style={[
                    props.style as ViewStyle
                ]}
                accessibilityRole={"header"}
                // accessibilityLabel={"header"}
                aria-label={"header"}
            />
    );
}
