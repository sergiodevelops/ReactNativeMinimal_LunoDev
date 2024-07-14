import React, {CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactElement} from "react";
import {Text, TextProps} from "react-native";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import {isWeb} from "../../../utils/platform";
import MainView__paragraph from "../../../styles/ts/MainView/__paragraph/MainView__paragraph";
import MainView__text from "../../../styles/ts/MainView/__text/MainView__text";


type ParagraphProps = TextProps & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
export default function Paragraph (props: ParagraphProps): ReactElement {

    const { mainView__text_color } = MainView__text();
    const { mainView__paragraph } = MainView__paragraph();


    return (isWeb() ?
            <p
                {...props as DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>}
                style={{
                    ...mainView__text_color, // TODO rivedere qui
                    ...mainView__paragraph,
                    ...props.style as CSSProperties,
                }}
            /> :
            <Text
                aria-label={'paragraph'}
                {...props as TextProps}
                style={[
                    mainView__text_color,
                    mainView__paragraph,
                    props.style as TextStyle,
                ]}
            />
    );
}
