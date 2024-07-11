import {View, ViewProps} from "react-native";
import {CSSProperties, HTMLAttributes} from "react";
import {isWeb} from "../../../utils/platform";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import MainView__footer from "../../../styles/ts/MainView/__footer/MainView__footer";


type FooterProps = ViewProps & HTMLAttributes<HTMLElement>;
export default function Footer(props: FooterProps) {
    // https://www.w3schools.com/tags/tag_footer.asp
    const {mainView__footer} = MainView__footer();


    return (
        isWeb() ?
            <footer
                {...props as HTMLAttributes<HTMLElement>}
                style={{
                    ...mainView__footer,
                    ...props.style as CSSProperties,
                }}
                aria-label={"footer"}
            /> :
            <View
                {...props as ViewProps}
                style={[
                    mainView__footer,
                    props.style as ViewStyle
                ]}
                aria-label={"footer"}
            />
    );
}
