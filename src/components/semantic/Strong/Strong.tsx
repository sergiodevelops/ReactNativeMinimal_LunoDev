import {Text, TextProps} from "react-native";
import {isWeb} from "../../../utils/platform";
import {CSSProperties, DetailedHTMLProps, HTMLAttributes} from "react";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import MainView__paragraph from "../../../styles/ts/MainView/__paragraph/MainView__paragraph";


type StrongProps = TextProps & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
export default function Strong(props: StrongProps) {

    // https://www.w3schools.com/tags/tag_aside.asp
    const {
        mainView__paragraph,
        mainView__paragraph_default,
    } = MainView__paragraph();


    return (
        isWeb() ?
            <strong
                {...props as DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>}
                aria-label={"strong"}
                style={{
                    ...mainView__paragraph,
                    ...mainView__paragraph_default,
                    inlineSize: 'fit-content',
                    ...props.style as CSSProperties,
                }}
            /> :
            <Text
                {...props as TextProps}
                aria-label={"strong"}
                style={[
                    mainView__paragraph,
                    mainView__paragraph_default,
                    props.style as TextStyle,
                ]}
            />
    );
}
