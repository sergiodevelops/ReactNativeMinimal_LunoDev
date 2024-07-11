import React, {CSSProperties, HTMLAttributes, LabelHTMLAttributes, ReactElement, TextareaHTMLAttributes} from "react";
import {TextInput, TextInputProps, View} from "react-native";
import {isWeb} from "../../../utils/platform";
import MainView__input from "../../../styles/ts/MainView/__input/MainView__input";


type InputProps = TextInputProps & HTMLAttributes<HTMLInputElement>;
export default function Input(props: InputProps): ReactElement {
    // https://www.w3schools.com/tags/tag_input.asp
    const {
        mainView__input,
        mainView__placeholder_color
    } = MainView__input();


    return (isWeb() ?
            <View>
                <input
                    name={`${props.id}-name`}
                    {...props as LabelHTMLAttributes<HTMLInputElement>}
                    style={{
                        ...mainView__input,
                        ...props.style as CSSProperties,
                    }}
                />

                <style>
                    {
                        `textarea {resize: none;} 
                        ::placeholder {color: ${mainView__placeholder_color.color};}`
                    }
                </style>
            </View> :
            <TextInput
                {...props as TextInputProps}
                style={[
                    mainView__input,
                    props.style,
                ]}
                placeholderTextColor={mainView__placeholder_color.color}
                // textContentType={"username"}
            />
    );
}
