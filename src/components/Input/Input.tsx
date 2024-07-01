import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from '../../styles/mainView/__textField/Input.styles';


export default function Input(){
    return (
        <View style={styles.wrapper}>
            <Text>Name:</Text>
            <TextInput style={styles.textInput} />
        </View>
    );
};
