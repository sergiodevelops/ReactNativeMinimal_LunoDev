import {Text, TextProps} from "react-native";
import {isWeb} from "../../../utils/platform";
import {CSSProperties, DetailedHTMLProps, HTMLAttributes} from "react";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import MainView__paragraph from "../../../styles/ts/MainView/__paragraph/MainView__paragraph";
import MainView__text from "../../../styles/ts/MainView/__text/MainView__text";


type StrongProps = TextProps & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
export default function Strong(props: StrongProps) {

    // https://www.w3schools.com/tags/tag_aside.asp
    const { mainView__text, mainView__text_bold } = MainView__text();
    const { mainView__paragraph } = MainView__paragraph();


    return (
        isWeb() ?
            <strong
                {...props as DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>}
                aria-label={"strong"}
                style={{
                    ...mainView__text,
                    ...mainView__paragraph,
                    inlineSize: 'fit-content',
                    ...props.style as CSSProperties,
                }}
            /> :
            <Text
                {...props as TextProps}
                aria-label={"strong"}
                style={[
                    mainView__text,
                    mainView__text_bold,
                    mainView__paragraph,
                    props.style as TextStyle,
                ]}
            />
    );
}
