import {View, ViewProps} from "react-native";


type MainProps = ViewProps;
export default function Main (props: MainProps){
    // https://www.w3schools.com/tags/tag_main.asp


    return (
        <View
            {...props}
            style={[
                {overflow: 'hidden'},
                props.style
            ]}
            role={'main'}
            aria-label={"main"}
        />
    );
}

