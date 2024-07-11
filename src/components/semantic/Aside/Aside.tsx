import {View, ViewProps} from "react-native";


type AsideProps = ViewProps;
export default function Aside (props: AsideProps){
    // https://www.w3schools.com/tags/tag_aside.asp


    return (
        <View
            {...props}
            aria-label={"aside"}
        />
    );
}

