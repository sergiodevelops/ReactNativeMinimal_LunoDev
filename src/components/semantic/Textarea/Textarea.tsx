import React, {
    ChangeEvent,
    CSSProperties,
    ReactElement,
    TextareaHTMLAttributes,
    useEffect,
    useRef,
} from "react";
import {TextInput, TextInputProps, View} from "react-native";
import MainView__textarea from "../../../styles/ts/MainView/__textarea/MainView__textarea";
import MainView__text from "../../../styles/ts/MainView/__text/MainView__text";
import MainView__input from "../../../styles/ts/MainView/__input/MainView__input";
import {isWeb} from "../../../utils/platform";
import MainView from "../../../styles/ts/MainView/MainView";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {TextStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";


type TextareaProps = {
    minOfLines?: number,
    maxOfLines?: number,
} & TextInputProps;
export default function Textarea(props: TextareaProps): ReactElement {
    const {defaultValue, onChangeText} = props;
    const minOfLines = props.minOfLines || props.numberOfLines || 2;
    const maxOfLines = props.maxOfLines || props.numberOfLines || -1;

    const {
        mainView__text_color,
        mainView__placeholder_color,
    } = MainView__text();
    const {mainView_container} = MainView();
    const {mainView__input} = MainView__input();
    const {
        mainView__textarea_container,
        mainView__textarea
    } = MainView__textarea();
    const textareaRef = useRef<HTMLTextAreaElement>(null);


    const handleOnChangeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (onChangeText) onChangeText(event.target.value);

        event.target.style.height = 'inherit';
        event.target.style.height = `${event.target.scrollHeight}px`;

        // In case you have a limitation // TODO not working for now
        // if(maxOfLines >= minOfLines)
        //     event.target.style.height = `${Math.min(event.target.scrollHeight, maxOfLines)}px`;
    }

    useEffect(() => {
        // https://www.geeksforgeeks.org/how-to-create-auto-resize-textarea-using-javascript-jquery/
        // https://stackoverflow.com/questions/58414515/typescript-3-7beta-optional-chaining-operator-using-problem
        // auto adjust height style to content "defaultValue" textarea la prima volta
        if(!defaultValue || !isWeb()) return;
        textareaRef!.current!.style!.height = 'inherit';
        textareaRef!.current!.style!.height = textareaRef!.current!.scrollHeight + 'px';
    }, []);


    // https://www.geeksforgeeks.org/how-to-make-textarea-100-without-overflow-when-padding-is-present/
    // https://es.stackoverflow.com/questions/542845/el-fieldset-se-sale-del-formulario-y-hace-que-los-inputs-se-salgan-y-no-sea-resp
    return (
        <View style={mainView__textarea_container}>
            {isWeb() ?
                <View>
                    <textarea
                        ref={textareaRef}
                        {...props as TextareaHTMLAttributes<HTMLTextAreaElement>}
                        rows={minOfLines}
                        name={`${props.id}-name`}
                        defaultValue={defaultValue}
                        onChange={handleOnChangeTextarea}
                        style={{
                            ...mainView_container,
                            ...mainView__text_color,
                            ...mainView__input,
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
                    placeholderTextColor={mainView__placeholder_color.color}
                    autoComplete={'off'}
                    {...props}
                    style={[
                        mainView_container,
                        mainView__text_color,
                        mainView__input,
                        mainView__textarea,
                        props.style as StyleProp<TextStyle>,
                    ]}
                    aria-label={'textarea'}
                    multiline={true}
                    numberOfLines={minOfLines}
                />}
        </View>
    );
}
