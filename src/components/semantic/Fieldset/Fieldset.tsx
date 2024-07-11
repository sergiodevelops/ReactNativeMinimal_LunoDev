import {View, ViewProps} from "react-native";
import {CSSProperties, HTMLAttributes} from "react";
import {isWeb} from "../../../utils/platform";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import MainView__fieldset from "../../../styles/ts/MainView/__fieldset/MainView__fieldset";


type FieldsetProps = ViewProps & HTMLAttributes<HTMLFieldSetElement>;
export default function Fieldset(props: FieldsetProps) {
    // https://www.w3schools.com/tags/tag_fieldset.asp
    // https://stackoverflow.com/questions/58381568/how-to-design-fieldset-legend-using-react-native
    const {mainView__fieldset, mainView__fieldset_container} = MainView__fieldset();


    return (
        isWeb() ?
            <View
                style={mainView__fieldset_container}
                children={
                    <fieldset
                        {...props as HTMLAttributes<HTMLFieldSetElement>}
                        style={{
                            ...mainView__fieldset,
                            ...props.style as CSSProperties,
                        }}
                    />
                }
            /> :
            <View style={mainView__fieldset_container}>
                <View
                    {...props as ViewProps}
                    style={[
                        mainView__fieldset,
                        props.style as ViewStyle
                    ]}
                    role={"form"}
                />
            </View>
    );
}
