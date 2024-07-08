import {View} from "react-native";
import {isWeb} from "../../../utils/platform";
import {ReactNode} from "react";


export default function Label({ children }: {children: ReactNode}) {
    return (
        isWeb() ?
        <p>{children}</p> :
        <View>{children}</View>
    );
}
