import React, {useState} from 'react';
import {Platform, Text, TextInput, View} from 'react-native';


export default function PizzaTranslator() {

    const [text, setText] = useState('');


    return (
        Platform.OS === 'ios' &&
        <View style={{padding: 10}}>
            <TextInput
                placeholder="Type here to translate!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Text>
                {text
                    .split(' ')
                    .map(word => word && `"${word}"`)
                    .join(' ')}
            </Text>
        </View>
    );
}
