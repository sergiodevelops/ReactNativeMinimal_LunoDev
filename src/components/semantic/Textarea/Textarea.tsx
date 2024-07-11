import React, {
    ChangeEvent,
    CSSProperties,
    HTMLAttributes,
    KeyboardEventHandler,
    LabelHTMLAttributes,
    ReactElement,
    TextareaHTMLAttributes
} from "react";
import {TextInput, TextInputProps, View} from "react-native";
import {isWeb} from "../../../utils/platform";
import MainView__input from "../../../styles/ts/MainView/__input/MainView__input";


type TextareaProps = { maxOfLines?: number } & TextInputProps & HTMLAttributes<HTMLInputElement>;


export default function Textarea(props: TextareaProps): ReactElement {

    const {
        mainView__textarea_container,
        mainView__textarea,
        mainView__placeholder_color,
    } = MainView__input();
    const minOfLines = props.numberOfLines || 2;
    // const maxOfLines = props.maxOfLines || 0;

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.style.height = 'inherit';
        event.target.style.height = `${event.target.scrollHeight}px`;
        // In case you have a limitation TODO not found
        // if(maxOfLines > 0) event.target.style.height = `${Math.min(event.target.scrollHeight, maxOfLines)}px`;
    }


    // https://www.geeksforgeeks.org/how-to-make-textarea-100-without-overflow-when-padding-is-present/
    // https://es.stackoverflow.com/questions/542845/el-fieldset-se-sale-del-formulario-y-hace-que-los-inputs-se-salgan-y-no-sea-resp
    return (isWeb() ?
            <View style={mainView__textarea_container}>
                <textarea
                    rows={minOfLines}
                    onChange={handleOnChange}
                    name={`${props.id}-name`}
                    {...props as TextareaHTMLAttributes<HTMLTextAreaElement>}
                    style={{
                        ...mainView__textarea,
                        ...props.style as CSSProperties,
                    }}
                />

                {/* https://www.w3schools.com/howto/howto_css_disable_resize_textarea.asp */}
                <style>
                    {
                        `textarea {resize: none;} 
                        ::placeholder {color: ${mainView__placeholder_color.color};}`
                    }
                </style>
            </View> :
            <TextInput
                multiline={true}
                numberOfLines={minOfLines}
                {...props as TextInputProps}
                style={[
                    mainView__textarea,
                    props.style,
                ]}
                placeholderTextColor={mainView__placeholder_color.color}
                // textContentType={"username"}
            />
    );
}
