import React from "react";
import {Text} from "react-native";
import {isWeb} from "../../../utils/platform";


export default function BreakLine() {
    return isWeb() ? <br/> : <Text children={`\n`}/>;
}
