import React, {ReactElement} from "react";
import {TextInput, TextInputProps, View} from "react-native";
import MainView__input from "../../../styles/ts/MainView/__input/MainView__input";
import MainView__text from "../../../styles/ts/MainView/__text/MainView__text";
import MainView from "../../../styles/ts/MainView/MainView";


type InputProps = TextInputProps;
export default function Input(props: InputProps): ReactElement {

    // https://www.w3schools.com/tags/tag_input.asp
    const {mainView_container} = MainView();
    const {mainView__text_color} = MainView__text();
    const {mainView__placeholder_color} = MainView__text();
    const {mainView__input} = MainView__input();


    return (
        <View>
            <TextInput
                placeholderTextColor={mainView__placeholder_color.color}
                autoComplete={'off'}
                {...props}
                style={[
                    mainView_container,
                    mainView__text_color,
                    mainView__input,
                    props.style,
                ]}
            />
        </View>
    );
}
