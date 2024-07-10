import {TextInputProps, View, ViewProps} from "react-native";
import MainView__form from "../../../styles/ts/MainView/__form/MainView__form";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";


type FormProps = ViewProps;
export default function Form (props: FormProps){
    // https://www.w3schools.com/tags/tag_form.asp
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

