import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {Picker, PickerProps} from "@react-native-picker/picker";
import MainView__input from "../../../styles/ts/MainView/__input/MainView__input";
import MainView__text from "../../../styles/ts/MainView/__text/MainView__text";
import MainView__select from "../../../styles/ts/MainView/__select/MainView__select";
import MainView from "../../../styles/ts/MainView/MainView";


type SelectProps = {
    options: any[],
    label?: string,
    onSelectedLanguage: (selectedLanguage: any | undefined) => void,
} & PickerProps;
export default function Select(props: SelectProps) {
    const {options, onSelectedLanguage} = props;
    const atribute = props.label || "name";

    const {mainView_container} = MainView();
    const {mainView__text_color} = MainView__text();
    const {
        mainView__input,
    } = MainView__input();
    const {
        mainView__selectOption_container,
        mainView__selectOption,
    } = MainView__select();


    const [selectedLanguageKey, setSelectedLanguageKey] = useState<`${number}-${string}` | 'default'>('default')
    const [selectedLanguage, setSelectedLanguage] = useState<(Object | string) | undefined>(undefined)


    const readProp = (obj: any, prop: string) => obj[prop];


    useEffect(() => {
        setSelectedLanguage(options
            .find((lang: (Object | string)) =>
                `${JSON.stringify(lang)}` === selectedLanguageKey));
    }, [selectedLanguageKey]);

    useEffect(() => {
        onSelectedLanguage(selectedLanguage);
    }, [selectedLanguage]);


    return (
        <View>
            <Picker
                {...props}
                style={[
                    mainView_container,
                    mainView__selectOption_container,
                    mainView__input,
                    mainView__text_color,
                    props.style,
                ]}
                placeholder={`Select one option`}
                selectedValue={selectedLanguageKey || 'default'}
                onValueChange={setSelectedLanguageKey}
            >
                {/*TODO fix error unique key for items Picker*/}
                <Picker.Item
                    key={`${0}-SelectPickerItem`}
                    style={mainView__selectOption}
                    label={"Select one option"}
                    value={"default"}
                />
                {options.map((option: Object | string, index: number) =>
                    <Picker.Item
                        key={`${JSON.stringify(option)}-${index}-SelectPickerItem`}
                        style={mainView__selectOption}
                        value={`${JSON.stringify(option)}`}
                        label={readProp(option, atribute) || option as string}
                    />
                )}
            </Picker>
        </View>
    );
}
