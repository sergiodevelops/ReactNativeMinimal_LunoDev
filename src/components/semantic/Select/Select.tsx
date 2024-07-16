import React, {useEffect, useId, useState} from "react";
import {View} from "react-native";
import {Picker, PickerProps} from "@react-native-picker/picker";
import MainView__input from "../../../styles/ts/MainView/__input/MainView__input";
import MainView__text from "../../../styles/ts/MainView/__text/MainView__text";
import MainView__select from "../../../styles/ts/MainView/__select/MainView__select";
import MainView from "../../../styles/ts/MainView/MainView";
import {KeyProp, OptionProp} from "../../../constants/types";


type SelectProps = {
    options: OptionProp[],
    defaultLabel?: string | undefined,
    defaultOption?: OptionProp,
    onOptionChange: (selectedOption: OptionProp) => void,
} & PickerProps;
export default function Select(props: SelectProps) {
    const id = `Select-${useId()}`;
    const {defaultLabel, options, onOptionChange, defaultOption} = props;
    const atribute = defaultLabel || "name";
    const {mainView_container} = MainView();
    const {mainView__text_color} = MainView__text();
    const {
        mainView__input,
    } = MainView__input();
    const {
        mainView__selectOption_container,
        mainView__selectOption,
    } = MainView__select();


    const getStringKey = (option: OptionProp): string => `${JSON.stringify(option)}`;
    const [optionKey, setOptionKey] = useState<KeyProp>(defaultOption ? getStringKey(defaultOption) : "default")
    const readProp = (item: any, prop: string) => item[prop];


    useEffect(() => {
        onOptionChange(options.find((option: OptionProp) =>
            getStringKey(option) === optionKey));
    }, [optionKey]);


    return (
        <View>
            <Picker
                mode={'dialog'}
                placeholder={`Select one option`}
                {...props}
                style={[
                    mainView_container,
                    mainView__selectOption_container,
                    mainView__input,
                    mainView__text_color,
                    props.style,
                ]}
                selectedValue={optionKey || 'default'}
                onValueChange={setOptionKey}
            >
                {/*TODO fix error unique key for items Picker*/}
                <Picker.Item
                    key={`${id}-SelectPickerItem`}
                    style={mainView__selectOption}
                    label={props.placeholder || "Select one option"}
                    value={'default'}
                />
                {options.map((option: OptionProp, index: number) =>
                    <Picker.Item
                        key={`${id}-${getStringKey(option)}-${index}-SelectPickerItem`}
                        style={mainView__selectOption}
                        label={readProp(option, atribute) || option as string}
                        value={getStringKey(option)}
                    />
                )}
            </Picker>
        </View>
    );
}
