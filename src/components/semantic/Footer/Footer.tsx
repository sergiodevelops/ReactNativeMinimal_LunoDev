import {View, ViewProps} from "react-native";
import {CSSProperties, HTMLAttributes} from "react";
import {isWeb} from "../../../utils/platform";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import MainView__fieldset from "../../../styles/ts/MainView/__fieldset/MainView__fieldset";


type FooterProps = ViewProps & HTMLAttributes<HTMLElement>;
export default function Footer(props: FooterProps) {
    // https://www.w3schools.com/tags/tag_footer.asp
    const {mainView__fieldset} = MainView__fieldset();


    return (
        isWeb() ?
            <footer
                {...props as HTMLAttributes<HTMLElement>}
                style={{
                    ...mainView__fieldset,
                    ...props.style as CSSProperties,
                }}
            /> :
            <View
                {...props as ViewProps}
                style={[
                    mainView__fieldset,
                    props.style as ViewStyle
                ]}
                accessibilityLabel={"footer"}
            />
    );
}
