import {isWeb} from "../../../utils/platform";
import {Text, View} from "react-native";
import React from "react";


export default function FixMarginButtomProblem() {
    return <>
        {
            !isWeb() &&
            <View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View>
        }
    </>;
}
