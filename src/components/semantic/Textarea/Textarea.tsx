import React, { ReactElement} from "react";
import {TextInput, TextInputProps, View} from "react-native";
import MainView__textarea from "../../../styles/ts/MainView/__textarea/MainView__textarea";
import MainView__text from "../../../styles/ts/MainView/__text/MainView__text";
import MainView__input from "../../../styles/ts/MainView/__input/MainView__input";


type TextareaProps = TextInputProps;
export default function Textarea(props: TextareaProps): ReactElement {

    const {
        mainView__text_color,
        mainView__placeholder_color,
    } = MainView__text();
    const {mainView__input} = MainView__input();
    const {
        mainView__textarea_container,
        mainView__textarea
    } = MainView__textarea();
    const minOfLines = props.numberOfLines || 2;

    /*
    // const maxOfLines = props.maxOfLines || 0;

    for input native HTML element // TODO remove then
    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.style.height = 'inherit';
        event.target.style.height = `${event.target.scrollHeight}px`;
        // In case you have a limitation // TODO not working
        // if(maxOfLines > 0) event.target.style.height = `${Math.min(event.target.scrollHeight, maxOfLines)}px`;
    }
    */


    // https://www.geeksforgeeks.org/how-to-make-textarea-100-without-overflow-when-padding-is-present/
    // https://es.stackoverflow.com/questions/542845/el-fieldset-se-sale-del-formulario-y-hace-que-los-inputs-se-salgan-y-no-sea-resp
    return (
        <View style={mainView__textarea_container}>
            <TextInput
                aria-label={'textarea'}
                multiline={true}
                numberOfLines={minOfLines}
                {...props as TextInputProps}
                style={[
                    mainView__text_color,
                    mainView__input,
                    mainView__textarea,
                    props.style,
                ]}
                placeholderTextColor={mainView__placeholder_color.color}
            />
        </View>
    );
}
