import {Text, TextProps} from "react-native";
import React from "react";
import MainView__paragraph from "../../../styles/ts/MainView/__paragraph/MainView__paragraph";
import MainView__heading from "../../../styles/ts/MainView/__heading/mainView__heading";


export default function Heading(props: {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
} & TextProps) {
    const {mainView__paragraph} = MainView__paragraph();
    const {
        mainView__heading,
        mainView__heading_h1,
        mainView__heading_h2,
        mainView__heading_h3,
        mainView__heading_h4,
        mainView__heading_h5,
        mainView__heading_h6,
    } = MainView__heading();
    const variant = props.variant || "h1";


    return (
        <Text
            role={"heading"}
            {...props}
            style={[
                mainView__paragraph,
                mainView__heading,
                props.style,
                variant === "h1" && mainView__heading_h1,
                variant === "h2" && mainView__heading_h2,
                variant === "h3" && mainView__heading_h3,
                variant === "h4" && mainView__heading_h4,
                variant === "h5" && mainView__heading_h5,
                variant === "h6" && mainView__heading_h6,
            ]}
            // aria-level={variant.substr(1, 1)} //TODO remove deprecated
            aria-level={variant.slice(1, 2)}
        />
    );
}
