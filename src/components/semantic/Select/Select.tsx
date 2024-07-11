import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {Picker, PickerProps} from "@react-native-picker/picker";
import MainView__input from "../../../styles/ts/MainView/__input/MainView__input";


type SelectProps = {
    options: any[],
    label?: string,
    onSelectedLanguage: (selectedLanguage: any | undefined) => void,
} & PickerProps;
export default function Select(props: SelectProps) {
    const {options, onSelectedLanguage} = props;
    const atribute = props.label || "name";
    const {
        mainView__selectOption_container,
        mainView__selectOption,
        mainView__input,
    } = MainView__input();


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
                    mainView__selectOption_container,
                    mainView__input,
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
