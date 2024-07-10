import React, {
    ChangeEvent,
    CSSProperties,
    HTMLAttributes,
    KeyboardEventHandler,
    LabelHTMLAttributes,
    ReactElement,
    TextareaHTMLAttributes
} from "react";
import {TextInput, TextInputProps} from "react-native";
import {isWeb} from "../../../utils/platform";
import MainView__input from "../../../styles/ts/MainView/__input/MainView__input";


type TextareaProps = {maxOfLines?: number} & TextInputProps & HTMLAttributes<HTMLInputElement>;


export default function Textarea(props: TextareaProps): ReactElement {

    const {
        mainView__input,
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


    return (isWeb() ?
            <>
                <textarea
                    rows={minOfLines}
                    onChange={handleOnChange}
                    name={`${props.id}-name`}
                    {...props as TextareaHTMLAttributes<HTMLTextAreaElement>}
                    style={{
                        ...mainView__input,
                        ...props.style as CSSProperties,
                    }}
                />
                <style>
                    {`
                    ::placeholder { 
                        color: ${mainView__placeholder_color.color}; 
                    }`}
                </style>
            </> :
            <TextInput
                multiline={true}
                numberOfLines={minOfLines}
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
