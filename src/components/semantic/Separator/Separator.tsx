import {View, StyleSheet} from "react-native";


export default function Separator (){
    // https://www.w3schools.com/tags/tag_aside.asp


    return (
        // https://reactnative.dev/docs/button
        <View
            style={{
                marginVertical: 8,
                borderBottomColor: '#737373',
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
            role={'separator'}
            aria-label={"separator"}
        />
    );
}

