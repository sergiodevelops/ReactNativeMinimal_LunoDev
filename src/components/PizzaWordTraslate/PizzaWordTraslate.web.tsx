import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';


export default function PizzaTranslator(){
    const [text, setText] = useState<string>('');


    return (
        <View style={{padding: 10}}>
            <TextInput
                style={{height: 40, color: 'white'}}
                placeholder="Type here to translate!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Text
                style={{padding: 10, fontSize: 20, color: 'white'}}>
                {text
                    .split(' ')
                    .map(word => word && `"${word}"`)
                    .join(' ')}
            </Text>
        </View>
    );
};
