import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';


const PizzaTranslator = () => {
    const [text, setText] = useState('');


    return (
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
};


export default PizzaTranslator;
