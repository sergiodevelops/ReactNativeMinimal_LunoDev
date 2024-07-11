import {TextInputProps, View, ViewProps} from "react-native";
import MainView__form from "../../../styles/ts/MainView/__form/MainView__form";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";


type FormProps = ViewProps;
export default function Form(props: FormProps) {
    // https://www.w3schools.com/tags/tag_form.asp
    {/*
            Some elements, not all of them form-associated, are categorized
            as labelable elements. These are elements that can be associated
            with a label element. "button" "input" (if the type attribute
            is not in the hidden state) "keygen" "meter" "output" "progress"
            "select" "textarea"
            https://stackoverflow.com/questions/66943376/react-htmlfor-clicking-label-focus-on-the-wrong-input
            generate unique id for linked label with input in React
            https://react.dev/reference/react/useId
            */
    }
    const {mainView__form} = MainView__form();

    return (
        <View
            {...props as ViewProps}
            role={"form"}
            style={[
                mainView__form,
                props.style as ViewStyle
            ]}
        />
    );
}

