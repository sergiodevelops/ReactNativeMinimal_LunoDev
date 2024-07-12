import React, {CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactElement} from "react";
import {Text, TextProps} from "react-native";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import {isWeb} from "../../../utils/platform";
import MainView__paragraph from "../../../styles/ts/MainView/__paragraph/MainView__paragraph";


type ParagraphProps = TextProps & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
export default function Paragraph (props: ParagraphProps): ReactElement {

    const {
        mainView__paragraph,
        mainView__paragraph_default
    } = MainView__paragraph();


    return (isWeb() ?
            <p
                {...props as DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>}
                style={{
                    ...mainView__paragraph,
                    ...mainView__paragraph_default,
                    ...props.style as CSSProperties,
                }}
            /> :
            <Text
                {...props as TextProps}
                style={[
                    mainView__paragraph,
                    mainView__paragraph_default,
                    props.style as TextStyle,
                ]}
            />
    );
}
